import { SketchCollector } from '../../sketchCollector';

export class RedBySfrCollector extends SketchCollector {

    static CONFIG = {
        id: "red_by_sfr",
        name: "Red by SFR",
        description: "i18n.collectors.red_by_sfr.description",
        version: "0",
        website: "https://red-by-sfr.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/6/6f/Logo_Red_By_SFR_2016.svg",
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
        super(RedBySfrCollector.CONFIG);
    }
}
