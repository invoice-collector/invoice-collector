
import { SketchCollector } from '../../sketchCollector';

export class ShareNowCollector extends SketchCollector {

    static CONFIG = {
        id: "share_now",
        name: "Share Now",
        description: "i18n.collectors.share_now.description",
        version: "0",
        website: "https://www.share-now.com/customer/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/187348.jpg",
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
        entryUrl: "https://www.share-now.com/customer/login",
    }

    constructor() {
        super(ShareNowCollector.CONFIG);
    }
}
