
import { SketchCollector } from '../../sketchCollector';

export class LinkodyCollector extends SketchCollector {

    static CONFIG = {
        id: "linkody",
        name: "Linkody",
        description: "i18n.collectors.linkody.description",
        version: "0",
        website: "https://www.linkody.com/en/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2691499.jpg",
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
        entryUrl: "https://www.linkody.com/en/account/invoices",
    }

    constructor() {
        super(LinkodyCollector.CONFIG);
    }
}
