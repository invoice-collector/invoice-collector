
import { SketchCollector } from '../../sketchCollector';

export class DerGrunePunktCollector extends SketchCollector {

    static CONFIG = {
        id: "der_grune_punkt",
        name: "Der Grune Punkt",
        description: "i18n.collectors.der_grune_punkt.description",
        version: "0",
        website: "https://portal.gruener-punkt.de/onlinedsd/f?p=200:101::::::",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3202763.jpg",
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
        entryUrl: "https://portal.gruener-punkt.de/onlinedsd/f?p=200:101::::::",
    }

    constructor() {
        super(DerGrunePunktCollector.CONFIG);
    }
}
