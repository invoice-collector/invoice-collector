
import { SketchCollector } from '../../sketchCollector';

export class MadgicxCollector extends SketchCollector {

    static CONFIG = {
        id: "madgicx",
        name: "Madgicx",
        description: "i18n.collectors.madgicx.description",
        version: "0",
        website: "https://invoice.stripe.com/i/acct_1CSQNKCGZsMIpI9T/invst_IUrRwsldDZw1bQOSLmrm1qEOCXXuPDW",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640790.jpg",
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
        entryUrl: "https://invoice.stripe.com/i/acct_1CSQNKCGZsMIpI9T/invst_IUrRwsldDZw1bQOSLmrm1qEOCXXuPDW",
    }

    constructor() {
        super(MadgicxCollector.CONFIG);
    }
}
