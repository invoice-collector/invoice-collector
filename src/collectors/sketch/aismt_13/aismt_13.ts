
import { SketchCollector } from '../../sketchCollector';

export class Aismt13Collector extends SketchCollector {

    static CONFIG = {
        id: "aismt_13",
        name: "AISMT 13",
        description: "i18n.collectors.aismt_13.description",
        version: "0",
        website: "https://www.aismt13.fr/portail-adherents/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503056.jpg",
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
        entryUrl: "https://www.aismt13.fr/portail-adherents/",
    }

    constructor() {
        super(Aismt13Collector.CONFIG);
    }
}
