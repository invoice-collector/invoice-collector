const path = require('path');
const fs = require('fs');

function updateLoader(folder) {
    const absPath = path.resolve(__dirname, folder);
    const loaderFile = path.resolve(absPath, "loader.ts");

    if (!fs.existsSync(loaderFile)) {
        throw new Error(`Loader file not found: ${loaderFile}`);
    }
    
    const collectors = [];
    const folders = fs.readdirSync(absPath);
    folders.forEach(folder => {
        const folderPath = path.join(absPath, folder);
        if (fs.statSync(folderPath).isDirectory()) {
            const file = path.join(folderPath, `${folder}.ts`);
            if (fs.existsSync(file)) {
                const content = fs.readFileSync(file, 'utf8');
                
                content.split('\n').forEach((line, idx) => {
                    if (line.includes('export class')) {
                        const className = line.split(' ')[2];
                        collectors.push({ className, folder });
                    }
                });
            }
            else {
                console.warn(`File not found: ${file}`);
            }
        }
    });

    // Sort collectors by className
    collectors.sort((a, b) => a.className.localeCompare(b.className));

    // Generate loader content
    let loaderContent = 'export let collectors: any[] = [];\n';
    collectors.forEach(({ className, folder }) => {
        loaderContent += `import { ${className} } from './${folder}/${folder}'; collectors.push(${className});\n`;
    });
    fs.writeFileSync(loaderFile, loaderContent);

    console.log(`Updated loader file: ${loaderFile} with ${collectors.length} collectors`);
}

function updateLoaders() {
    updateLoader("../src/collectors/sketch");
    updateLoader("../src/collectors/community");
    updateLoader("../src/collectors/core");
    updateLoader("../src/collectors/premium");
}

updateLoaders();