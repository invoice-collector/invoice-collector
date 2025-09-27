
import { SketchCollector } from '../../sketchCollector';

export class ContegoFactoringCollector extends SketchCollector {

    static CONFIG = {
        id: "contego_factoring",
        name: "Contego Factoring",
        description: "i18n.collectors.contego_factoring.description",
        version: "0",
        website: "https://contego.factoring.digital/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4213386.jpg",
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
        entryUrl: "https://contego.factoring.digital/login",
    }

    constructor() {
        super(ContegoFactoringCollector.CONFIG);
    }
}
