import { SketchCollector } from '../../sketchCollector';

export class ToutSurMonEauCollector extends SketchCollector {

    static CONFIG = {
        id: "toutsurmoneau",
        name: "Tout sur mon Eau (SUEZ)",
        description: "i18n.collectors.toutsurmoneau.description",
        version: "0",
        website: "https://toutsurmoneau.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Suez_logo.svg",
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
        }
    }

    constructor() {
        super(ToutSurMonEauCollector.CONFIG);
    }
}
