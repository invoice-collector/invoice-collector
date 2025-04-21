import path from 'path';
import { I18n as LibI18n } from 'i18n';

export class I18n {

    static LOCALES = ['en', 'fr'];
    static DEFAULT_LOCALE = 'en';

    static i18n = new LibI18n({
        locales: I18n.LOCALES,
        directory: path.join(__dirname, '..', 'locales'),
        defaultLocale: I18n.DEFAULT_LOCALE,
        retryInDefaultLocale: true,
        updateFiles: false,
        cookie: 'lang'
    });

    static get(phrase: string | undefined, locale: string): string {
        return  I18n.i18n.__({ phrase, locale });
    }
}