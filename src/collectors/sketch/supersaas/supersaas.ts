
import { SketchCollector } from '../../sketchCollector';

export class SupersaasCollector extends SketchCollector {

    static CONFIG = {
        id: "supersaas",
        name: "SuperSaaS",
        description: "i18n.collectors.supersaas.description",
        version: "0",
        website: "https://www.supersaas.de/accounts/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759690.jpg",
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
        entryUrl: "https://www.supersaas.de/accounts/invoice",
    }

    constructor() {
        super(SupersaasCollector.CONFIG);
    }
}
