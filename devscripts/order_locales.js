const fs = require('fs');
const path = require('path');
const LOCALES_DIR = 'locales';

function orderLocales() {
    // List locales in directory
    const files = fs.readdirSync(LOCALES_DIR);

    // For each file
    files.forEach(file => {
        // If file is a JSON file
        if (file.endsWith('.json')) {
            // Compute the path to the file
            const filePath = path.join(LOCALES_DIR, file);
            // Read the file
            const content = fs.readFileSync(filePath, 'utf-8');
            // Parse the JSON content
            const jsonContent = JSON.parse(content);
            // Sort the keys
            const sortedContent = Object.keys(jsonContent)
                .sort()
                .reduce((obj, key) => {
                    obj[key] = jsonContent[key];
                    return obj;
                }, {});
                console.log(sortedContent);

            // Write the sorted content back to the file
            fs.writeFileSync(filePath, JSON.stringify(sortedContent, null, 2), 'utf-8');
        }
    });
}

orderLocales();