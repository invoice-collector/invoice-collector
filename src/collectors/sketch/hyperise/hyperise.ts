
import { SketchCollector } from '../../sketchCollector';

export class HyperiseCollector extends SketchCollector {

    static CONFIG = {
        id: "hyperise",
        name: "Hyperise",
        description: "i18n.collectors.hyperise.description",
        version: "0",
        website: "https://app.hyperise.io/settings#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645384.jpg",
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
        entryUrl: "https://app.hyperise.io/settings#/invoices",
    }

    constructor() {
        super(HyperiseCollector.CONFIG);
    }
}
