
import { SketchCollector } from '../../sketchCollector';

export class AppfollowCollector extends SketchCollector {

    static CONFIG = {
        id: "appfollow",
        name: "AppFollow",
        description: "i18n.collectors.appfollow.description",
        version: "0",
        website: "https://watch.appfollow.io/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75150.jpg",
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
        entryUrl: "https://watch.appfollow.io/billing/invoices",
    }

    constructor() {
        super(AppfollowCollector.CONFIG);
    }
}
