
import { SketchCollector } from '../../sketchCollector';

export class RogersBusinessSelfServeCollector extends SketchCollector {

    static CONFIG = {
        id: "rogers_business_self_serve",
        name: "Rogers - Business Self Serve",
        description: "i18n.collectors.rogers_business_self_serve.description",
        version: "0",
        website: "https://www.rogers.com/web/smb/bss/#/viewInvoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/849060.jpg",
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
        entryUrl: "https://www.rogers.com/web/smb/bss/#/viewInvoice",
    }

    constructor() {
        super(RogersBusinessSelfServeCollector.CONFIG);
    }
}
