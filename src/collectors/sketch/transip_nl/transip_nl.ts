
import { SketchCollector } from '../../sketchCollector';

export class TransipNlCollector extends SketchCollector {

    static CONFIG = {
        id: "transip_nl",
        name: "transip.nl",
        description: "i18n.collectors.transip_nl.description",
        version: "0",
        website: "https://www.transip.nl/cp/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20520.jpg",
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
        entryUrl: "https://www.transip.nl/cp/",
    }

    constructor() {
        super(TransipNlCollector.CONFIG);
    }
}
