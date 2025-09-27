
import { SketchCollector } from '../../sketchCollector';

export class WhopCollector extends SketchCollector {

    static CONFIG = {
        id: "whop",
        name: "Whop",
        description: "i18n.collectors.whop.description",
        version: "0",
        website: "https://whop.com/account/?menuItem=order_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920156.jpg",
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
        entryUrl: "https://whop.com/account/?menuItem=order_history",
    }

    constructor() {
        super(WhopCollector.CONFIG);
    }
}
