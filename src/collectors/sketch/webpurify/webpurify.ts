
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebpurifyCollector extends SketchCollector {

    static CONFIG = {
        id: "webpurify",
        name: "WebPurify",
        description: "i18n.collectors.webpurify.description",
        version: "0",
        website: "https://www.webpurify.com/account/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170808.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.webpurify.com/account/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebpurifyCollector.CONFIG);
    }
}
