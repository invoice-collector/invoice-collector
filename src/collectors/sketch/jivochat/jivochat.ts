
import { SketchCollector } from '../../sketchCollector';

export class JivochatCollector extends SketchCollector {

    static CONFIG = {
        id: "jivochat",
        name: "JivoChat",
        description: "i18n.collectors.jivochat.description",
        version: "0",
        website: "https://app.jivosite.com/login?dh=jivochat.com%2F&ewv=1&form_url=index&lang=en&pricelist_id=2104&utm_campaign=direct&utm_source=direct",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741959.jpg",
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
        entryUrl: "https://app.jivosite.com/login?dh=jivochat.com%2F&ewv=1&form_url=index&lang=en&pricelist_id=2104&utm_campaign=direct&utm_source=direct",
    }

    constructor() {
        super(JivochatCollector.CONFIG);
    }
}
