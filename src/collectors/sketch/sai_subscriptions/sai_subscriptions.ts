
import { SketchCollector } from '../../sketchCollector';

export class SaiSubscriptionsCollector extends SketchCollector {

    static CONFIG = {
        id: "sai_subscriptions",
        name: "SAi Subscriptions",
        description: "i18n.collectors.sai_subscriptions.description",
        version: "0",
        website: "https://www.saisubscriptions.com/?invoices=open",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4491397.jpg",
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
        entryUrl: "https://www.saisubscriptions.com/?invoices=open",
    }

    constructor() {
        super(SaiSubscriptionsCollector.CONFIG);
    }
}
