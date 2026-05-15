import path from 'path';
import { I18n as LibI18n } from 'i18n';
import { IntegrationConfig } from './integration/abstractIntegration';
import { Config } from './collectors/abstractCollector';
import { State } from './model/state';

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

    static translateState(state: State, locale: string): State {
        // Translate the state title and message
        state.title = I18n.get(state.title, locale);
        state.message = I18n.get(state.message, locale);
        return state;
    }

    static translateCollector(config: Config, locale: string): Config {
        const name: string = I18n.get(config.name, locale);
        const description: string = I18n.get(config.description, locale);
        const instructions: string = I18n.get(config.instructions, locale);
        const params = Object.keys(config.params).reduce((acc, key) => {
            acc[key] = {
                ...config.params[key],
                name: I18n.get(config.params[key].name, locale),
                placeholder: I18n.get(config.params[key].placeholder, locale)
            };
            return acc;
        }, {});
        return {
            ...config,
            name,
            description,
            instructions,
            params
        };
    }
    
    static translateIntegration(integration: IntegrationConfig, locale: string): IntegrationConfig {
        const name: string = I18n.get(integration.name, locale);
        const description: string = I18n.get(integration.description, locale);
        const params = Object.keys(integration.params).reduce((acc, key) => {
            acc[key] = {
                ...integration.params[key],
                name: I18n.get(integration.params[key].name, locale),
                placeholder: I18n.get(integration.params[key].placeholder, locale)
            };
            return acc;
        }, {});
        return {
            ...integration,
            name,
            description,
            params
        };
    }
}