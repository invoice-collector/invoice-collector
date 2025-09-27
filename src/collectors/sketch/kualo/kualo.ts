
import { SketchCollector } from '../../sketchCollector';

export class KualoCollector extends SketchCollector {

    static CONFIG = {
        id: "kualo",
        name: "Kualo",
        description: "i18n.collectors.kualo.description",
        version: "0",
        website: "https://my.kualo.com/uk/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727895.jpg",
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
        entryUrl: "https://my.kualo.com/uk/account/invoices",
    }

    constructor() {
        super(KualoCollector.CONFIG);
    }
}
