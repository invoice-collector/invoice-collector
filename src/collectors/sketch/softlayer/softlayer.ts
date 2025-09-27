
import { SketchCollector } from '../../sketchCollector';

export class SoftlayerCollector extends SketchCollector {

    static CONFIG = {
        id: "softlayer",
        name: "SoftLayer",
        description: "i18n.collectors.softlayer.description",
        version: "0",
        website: "https://control.softlayer.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10068.jpg",
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
        entryUrl: "https://control.softlayer.com/account/invoices",
    }

    constructor() {
        super(SoftlayerCollector.CONFIG);
    }
}
