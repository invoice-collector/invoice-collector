
import { SketchCollector } from '../../sketchCollector';

export class JoinMeCollector extends SketchCollector {

    static CONFIG = {
        id: "join_me",
        name: "join.me",
        description: "i18n.collectors.join_me.description",
        version: "0",
        website: "https://store.logmein.com/api/BillingHistory.svc/GetBillingHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510.jpg",
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
        entryUrl: "https://store.logmein.com/api/BillingHistory.svc/GetBillingHistory",
    }

    constructor() {
        super(JoinMeCollector.CONFIG);
    }
}
