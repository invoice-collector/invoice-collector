
import { SketchCollector } from '../../sketchCollector';

export class HtmlsigCollector extends SketchCollector {

    static CONFIG = {
        id: "htmlsig",
        name: "htmlsig",
        description: "i18n.collectors.htmlsig.description",
        version: "0",
        website: "https://htmlsig.com/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762223.jpg",
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
        entryUrl: "https://htmlsig.com/billing/history",
    }

    constructor() {
        super(HtmlsigCollector.CONFIG);
    }
}
