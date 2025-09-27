
import { SketchCollector } from '../../sketchCollector';

export class OnlineMarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "online_marketing",
        name: "Online-Marketing",
        description: "i18n.collectors.online_marketing.description",
        version: "0",
        website: "https://erfolg2.online-marketing.net/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39917.jpg",
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
        entryUrl: "https://erfolg2.online-marketing.net/login/",
    }

    constructor() {
        super(OnlineMarketingCollector.CONFIG);
    }
}
