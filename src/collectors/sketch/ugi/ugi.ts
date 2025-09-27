
import { SketchCollector } from '../../sketchCollector';

export class UgiCollector extends SketchCollector {

    static CONFIG = {
        id: "ugi",
        name: "UGI",
        description: "i18n.collectors.ugi.description",
        version: "0",
        website: "https://onlineaccount.ugi.com/portal/BillingHistory.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/874607.jpg",
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
        entryUrl: "https://onlineaccount.ugi.com/portal/BillingHistory.aspx",
    }

    constructor() {
        super(UgiCollector.CONFIG);
    }
}
