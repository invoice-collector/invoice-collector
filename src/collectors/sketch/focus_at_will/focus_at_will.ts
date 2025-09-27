
import { SketchCollector } from '../../sketchCollector';

export class FocusAtWillCollector extends SketchCollector {

    static CONFIG = {
        id: "focus_at_will",
        name: "Focus at Will",
        description: "i18n.collectors.focus_at_will.description",
        version: "0",
        website: "https://focusatwill.recurly.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21709.jpg",
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
        entryUrl: "https://focusatwill.recurly.com/account/invoices",
    }

    constructor() {
        super(FocusAtWillCollector.CONFIG);
    }
}
