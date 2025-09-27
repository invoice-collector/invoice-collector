
import { SketchCollector } from '../../sketchCollector';

export class SaasDeCollector extends SketchCollector {

    static CONFIG = {
        id: "saas_de",
        name: "SaaS.de",
        description: "i18n.collectors.saas_de.description",
        version: "0",
        website: "https://desktop.saas.de/?locale=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10006.jpg",
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
        entryUrl: "https://desktop.saas.de/?locale=en",
    }

    constructor() {
        super(SaasDeCollector.CONFIG);
    }
}
