import fs from 'fs';
import path from 'path';

const LOCALES_DIR = 'locales';
const DEFAULT_LOCALE = 'en';

function getI18nFromLocales(): Record<string, string[]> {
    const locales: Record<string, string[]> = {};

    const files = fs.readdirSync(LOCALES_DIR);
    files.forEach(file => {
        if (file.endsWith('.json')) {
            const locale = path.basename(file, '.json');
            locales[locale] = getI18nFromLocale(file);
        }
    });

    return locales;
}

function getI18nFromLocale(file:string): string[] {
    const filePath = path.join(LOCALES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const jsonContent = JSON.parse(content);
    return Object.keys(jsonContent);
}

function getI18nFromCode(): string[] {
    const refSrc = getI18nFromDir('src');
    const refViews = getI18nFromDir('views');
    return [...refSrc, ...refViews];
}

function getI18nFromDir(srcDir: string): string[] {
    const i18nRefs: string[] = [];
    const fileExtensions = ['.ts', '.tsx', '.js', '.jsx', '.ejs'];

    function searchFile(filePath: string) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const regex = /['"](i18n(?:\.[a-zA-Z0-9_-]+)+)['"]/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            i18nRefs.push(match[1]);
        }
    }

    function walkDir(dir: string) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                walkDir(fullPath);
            } else if (fileExtensions.includes(path.extname(fullPath))) {
                searchFile(fullPath);
            }
        }
    }

    walkDir(srcDir);
    return Array.from(new Set(i18nRefs));
}

describe('Check locales format', () => {
    const locales = getI18nFromLocales();

    Object.entries(locales).forEach(([locale, keys]) => {
        it(locale, () => {
            let errors: string[] = [];
            keys.forEach(key => {
                if (!key.startsWith('i18n.')) {
                    errors.push(`${key} must start with "i18n."`);
                }
                if (key.includes('-')) {
                    errors.push(`${key} must not contain hyphens (-). Use underscores (_) instead.`);
                }
            });
            if (errors.length > 0) {
                throw new Error(`Errors in locale "${locale}":\n${errors.join('\n')}`);
            }
        });
    });
});

describe('Check third locales vs default locale', () => {
    const locales = getI18nFromLocales();
    const defaultLocaleValues = locales[DEFAULT_LOCALE];
    delete locales[DEFAULT_LOCALE]; // Remove default locale from the list
    const thirdLocales = locales;

    Object.entries(thirdLocales).forEach(([locale, thirdLocalesValues]) => {
        it(locale, () => {
            let errors: string[] = [];
            thirdLocalesValues.forEach(key => {
                //console.log(`1 key: ${key}`);
                if (!defaultLocaleValues.includes(key)) {
                    errors.push(`${key} exists in locale ${locale} but is missing in default locale ${DEFAULT_LOCALE}`);
                }
            });
            defaultLocaleValues.forEach(key => {
                //console.log(`2 key: ${key}`);
                if (!thirdLocalesValues.includes(key)) {
                    errors.push(`${key} exists in default locale ${DEFAULT_LOCALE} but is missing in locale ${locale}`);
                }
            });
            if (errors.length > 0) {
                throw new Error(`Errors in locale "${locale}":\n${errors.join('\n')}`);
            }
        });
    });
});


it('Check locales in code vs default locale', () => {
    const codeI18n = getI18nFromCode();
    const locales = getI18nFromLocales();
    const defaultLocaleValues = locales[DEFAULT_LOCALE];

    console.log(codeI18n)
    console.log(defaultLocaleValues)
    console.log(`Found ${defaultLocaleValues.length} i18n keys in default locale ${DEFAULT_LOCALE}`);
    console.log(`Found ${codeI18n.length} i18n keys in code`);

    let errors: string[] = [];
    codeI18n.forEach(key => {
        if (!defaultLocaleValues.includes(key)) {
            errors.push(`${key} exists in code but is missing in default locale ${DEFAULT_LOCALE}`);
        }
    });
    defaultLocaleValues.forEach(key => {
        if (!codeI18n.includes(key)) {
            errors.push(`${key} exists in default locale ${DEFAULT_LOCALE} but is missing in code`);
        }
    });
    if (errors.length > 0) {
        throw new Error(`Errors in code i18n:\n${errors.join('\n')}`);
    }
});
