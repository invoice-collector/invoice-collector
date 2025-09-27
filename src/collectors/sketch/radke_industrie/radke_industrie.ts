
import { SketchCollector } from '../../sketchCollector';

export class RadkeIndustrieCollector extends SketchCollector {

    static CONFIG = {
        id: "radke_industrie",
        name: "Radke Industrie",
        description: "i18n.collectors.radke_industrie.description",
        version: "0",
        website: "https://www.radtke-med.de/Reinigungsmittel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1986229.jpg",
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
        entryUrl: "https://www.radtke-med.de/Reinigungsmittel",
    }

    constructor() {
        super(RadkeIndustrieCollector.CONFIG);
    }
}
