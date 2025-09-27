
import { SketchCollector } from '../../sketchCollector';

export class VeoliaUkCollector extends SketchCollector {

    static CONFIG = {
        id: "veolia_uk",
        name: "Veolia UK",
        description: "i18n.collectors.veolia_uk.description",
        version: "0",
        website: "https://customerhub.veolia.co.uk/new/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/95590.jpg",
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
        entryUrl: "https://customerhub.veolia.co.uk/new/",
    }

    constructor() {
        super(VeoliaUkCollector.CONFIG);
    }
}
