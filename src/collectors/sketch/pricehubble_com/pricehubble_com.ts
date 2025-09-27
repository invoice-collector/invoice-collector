
import { SketchCollector } from '../../sketchCollector';

export class PricehubbleComCollector extends SketchCollector {

    static CONFIG = {
        id: "pricehubble_com",
        name: "pricehubble.com",
        description: "i18n.collectors.pricehubble_com.description",
        version: "0",
        website: "https://dash.pricehubble.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1183939.jpg",
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
        entryUrl: "https://dash.pricehubble.com/login",
    }

    constructor() {
        super(PricehubbleComCollector.CONFIG);
    }
}
