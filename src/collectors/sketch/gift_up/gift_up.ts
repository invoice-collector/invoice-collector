
import { SketchCollector } from '../../sketchCollector';

export class GiftUpCollector extends SketchCollector {

    static CONFIG = {
        id: "gift_up",
        name: "Gift Up",
        description: "i18n.collectors.gift_up.description",
        version: "0",
        website: "https://giftup.app/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/770958.jpg",
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
        entryUrl: "https://giftup.app/billing/invoices",
    }

    constructor() {
        super(GiftUpCollector.CONFIG);
    }
}
