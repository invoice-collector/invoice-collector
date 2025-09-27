
import { SketchCollector } from '../../sketchCollector';

export class TextmagicCollector extends SketchCollector {

    static CONFIG = {
        id: "textmagic",
        name: "TextMagic",
        description: "i18n.collectors.textmagic.description",
        version: "0",
        website: "https://my.textmagic.com/online/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105805.jpg",
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
        entryUrl: "https://my.textmagic.com/online/account/invoices",
    }

    constructor() {
        super(TextmagicCollector.CONFIG);
    }
}
