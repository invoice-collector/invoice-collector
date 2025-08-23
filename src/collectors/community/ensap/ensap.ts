import fs from 'fs';
import os from "os";
import path from 'path';
import { WebCollector } from '../../webCollector';
import { EnsapSelectors } from './selectors';
import { Driver } from '../../../driver/driver';
import { DownloadedInvoice, Invoice } from '../../abstractCollector';
import { nodewhisper } from 'nodejs-whisper';

export class EnsapCollector extends WebCollector {

    static CONFIG = {
        id: "ensap",
        name: "Ensap",
        description: "i18n.collectors.ensap.description",
        version: "0",
        website: "https://ensap.gouv.fr",
        logo: "https://www.spagri.fr/wp-content/uploads/2024/07/ENSAP-1.png",
        params: {
            id: {
                type: "string",
                name: "i18n.collectors.all.identifier",
                placeholder: "i18n.collectors.ensap.identifier.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true,
            }
        },
        entryUrl: "https://ensap.gouv.fr/web/accueilconnecte"
    }

    constructor() {
        super(EnsapCollector.CONFIG);
    }

    async login(driver: Driver, params: any): Promise<string | void> {

        let count = 0;
        let is_logged_in = false;

        while (!is_logged_in && count < 5) {

            // Get captcha
            const {requestBody, responseBody} = await driver.goto(EnsapCollector.CONFIG.entryUrl, "/public/captcha/v1");

            const first_buffer = Buffer.from(responseBody.audio, 'base64').toString('utf8');
            const second_buffer = Buffer.from(first_buffer, 'base64');

            const audio_path = path.join(os.tmpdir(), responseBody.uuid + ".wav");
            fs.writeFileSync(audio_path, second_buffer);

            await nodewhisper(audio_path, {
                modelName: 'large-v3-turbo', //Downloaded models name
                autoDownloadModelName: 'large-v3-turbo', // (optional) auto download a model if model is not present
                removeWavFileAfterTranscription: true, // (optional) remove wav file once transcribed
                whisperOptions: {
                    outputInJson: true,
                    language: 'fr'
                },
                logger: {
                    debug: (...args: any[]) => {},
                    error: (...args: any[]) => {console.error(args)},
                    log: (...args: any[]) => {console.log(args)}
                }
            });

            const whisper_result = fs.readFileSync(audio_path + '.json', 'utf8');
            const whisper_data = JSON.parse(whisper_result);
            fs.unlinkSync(audio_path + '.json');

            const captcha_result = whisper_data.transcription.map(item => item.text).join('');

            const digits = captcha_result.match(/\d/g);

            if (digits == null || digits.length < 8) {
                count++;
                continue;
            }

            const firstEightDigits = digits.join('').substring(0, 8);

            // Input identifier, password and captcha
            await driver.inputText(EnsapSelectors.FIELD_IDENTIFIER, params.id, { delay: 500 });
            await driver.inputText(EnsapSelectors.FIELD_PASSWORD, params.password);
            await driver.inputText(EnsapSelectors.FIELD_CAPTCHA, firstEightDigits);

            // Click on submit button
            await driver.leftClick(EnsapSelectors.BUTTON_SUBMIT);

            const login_alert = await driver.getElement(EnsapSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
            if (login_alert) {
                return await login_alert.textContent("i18n.collectors.all.password.error");
            }

            is_logged_in = await this.is_logged_in(driver);
            count++;
        }

        // Check if login error exists
        if (!is_logged_in) {
            const login_validation = await driver.getElement(EnsapSelectors.CONTAINER_LOGIN_VALIDATION, { raiseException: false, timeout: 2000 });
            if (login_validation) {
                return await login_validation.textContent("i18n.class.state.1_error");
            }
            return "i18n.class.state.1_error";
        }
    }

    async collect(driver: Driver, params: any): Promise<Invoice[]> {
        // Get documents
        const {requestBody, responseBody} = await driver.goto("https://ensap.gouv.fr/web/remunerationpaie", "prive/remunerationpaie/v1");

        // Build return array
        return await Promise.all(responseBody.map(async document => {
            const timestamp = new Date(document.dateDocument).getTime();
            const link = `https://ensap.gouv.fr/prive/telechargerremunerationpaie/v1?documentUuid=${document.documentUuid}`;

            return {
                id: document.documentUuid,
                timestamp,
                link,
                amount: document.libelle3
            };
        }));
    }

    async download(driver: Driver, invoice: Invoice): Promise<DownloadedInvoice> {
        return {
            ...invoice,
            documents: [
                await this.download_link(driver, invoice.link)
            ]
        };
    }
}
