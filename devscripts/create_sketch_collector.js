const prompt = require('prompt-sync')();
const fetch = require('node-fetch');
const fs = require('fs');
require('dotenv').config();

function askUser(instructions, mandatory) {
    let response;
    do {
        response = prompt(instructions + (mandatory ? "(mandatory): " : "(optional): "));
    } while (mandatory && response.trim() === "");
    return response;
}

async function checkUrl(url, mimetype){
    try {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        };
        const res = await fetch(url, options);
        const contentType = res.headers.get('content-type');

        if (res.status < 200 || res.status >= 400) {
            throw new Error(`Request to url ${url} failed. Status Code: ${res.status}`);
        }

        if (!contentType || !contentType.includes(mimetype)) {
            throw new Error(`Invalid content-type. Expected ${mimetype} but received ${contentType}`);
        }

    } catch (error) {
        console.log(error);
        const force = askUser("URL check failed. Do you want to force the value? (Y/N)", false);
        if (!force || force.trim().toUpperCase() !== "Y") {
            throw new Error(`Invalid url: ${url}`, { cause: error });
        }
    }
}

async function callLlm(website, messageToLlm) {
    const mistralApiKey = process.env.MISTRALAI_API_KEY;
    if (!mistralApiKey) {
        throw new Error("Missing MISTRALAI_API_KEY environment variable.");
    }

    const mistralApiUrl = "https://api.mistral.ai/v1/chat/completions";

    const instructions = `
    For the following online service: ${website}

    Return the following informations in JSON format:
    - id: Id of the supplier in lowercase. It cannot contain hyphen (-).
    - id_camel_case : Id of the supplier in CamelCase
    - name: Simple name of the supplier. First letter must be uppercase.
    - description_en: English description of the service in one small sentence
    - description_fr: French description of the service in one small sentence

    ${messageToLlm || ''}
    `;

    const body = {
        model: "mistral-medium",
        messages: [
            { role: "user", content: instructions }
        ],
        response_format: {
            type: "json_schema",
            json_schema: {
                schema: {
                    properties: {
                        id: { type: "string", description: "id of the supplier in lowercase (eg.: openai). It cannot contain hyphen (-)." },
                        id_camel_case: { type: "string", description: "id of the supplier in CamelCase (eg.: OpenAI)" },
                        name: { type: "string", description: "Simple name of the supplier. First letter must be uppercase." },
                        description_en: { type: "string", description: "English description of the service in one small sentence." },
                        description_fr: { type: "string", description: "French description of the service in one small sentence" }
                    },
                    required: ["id", "id_camel_case", "name", "description_en", "description_fr"],
                    title: "SketchCollectorSchema",
                    type: "object",
                    additionalProperties: false
                },
                name: "SketchCollectorSchema",
                strict: true
            }
        }
    };

    console.log("Requesting MistralAI for collector creation...");

    const response = await fetch(mistralApiUrl, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${mistralApiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error(`MistralAI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
}

async function addI18n(language, key, value) {
    const i18nPath = `locales/${language}.json`;
    const i18nData = JSON.parse(fs.readFileSync(i18nPath, 'utf-8'));
    i18nData[key] = value;

    // Sort the keys
    const sortedI18nData = Object.keys(i18nData)
        .sort()
        .reduce((obj, key) => {
            obj[key] = i18nData[key];
            return obj;
        }, {});

    fs.writeFileSync(i18nPath, JSON.stringify(sortedI18nData, null, 2));
}

async function createSketchCollector() {
    console.log("Welcome to the Sketch Collector Setup!");

    // 1. Collect basic information
    const website = askUser("Website URL", true);
    await checkUrl(website, "text/html");
    const logo = askUser("Link to the logo. Prefer wikipedia logo in .svg format", true);
    await checkUrl(logo, "image");
    const messageToLlm = askUser("Optional Message to LLM", false);

    // 2. Parse base URL
    const urlObj = new URL(website);
    const baseUrl = urlObj.origin;

    // 3. Request to MistralAI API to create a new collector
    const llmResult = await callLlm(baseUrl, messageToLlm);

    // 4. Build the collector object
    const collector = {
        id: llmResult.id.toLowerCase(),
        id_camel_case: llmResult.id_camel_case,
        name: llmResult.name,
        description_en: llmResult.description_en,
        description_fr: llmResult.description_fr,
        website: baseUrl,
        logo: logo
    };

    // 5. Check src/collectors/{id}.json does not exist
    const collectorPath = `src/collectors/sketch/${collector.id}`;
    const collectorFile = `${collectorPath}/${collector.id}.ts`;
    if (fs.existsSync(collectorPath)) {
        // Check if folder is not empty
        const files = fs.readdirSync(collectorPath);
        if (files.length > 0) {
            throw new Error(`Collector with id '${collector.id}' already exists at path ${collectorPath}. Aborting.`);
        }
    }

    // 6. Create the collector directory and write the collector.json file
    console.log("Creating collector at path:", collectorPath);
    fs.mkdirSync(collectorPath, { recursive: true });
    fs.writeFileSync(collectorFile, JSON.stringify(collector, null, 4));

    const sketchCollectorContent = `import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ${collector.id_camel_case}Collector extends SketchCollector {

    static CONFIG = {
        id: "${collector.id}",
        name: "${collector.name}",
        description: "i18n.collectors.${collector.id}.description",
        version: "0",
        website: "${collector.website}",
        logo: "${collector.logo}",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(${collector.id_camel_case}Collector.CONFIG);
    }
}
`;
    fs.writeFileSync(collectorFile, sketchCollectorContent);

    // 7. Populate i18n files
    console.log("Updating i18n files...");
    await addI18n('en', `i18n.collectors.${collector.id}.description`, collector.description_en);
    await addI18n('fr', `i18n.collectors.${collector.id}.description`, collector.description_fr);

    console.log("Sketch Collector creation completed successfully!");
    console.log("Ctrl + C to exit.");
}

createSketchCollector();
