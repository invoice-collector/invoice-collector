
import { SketchCollector } from '../../sketchCollector';

export class HighliteCollector extends SketchCollector {

    static CONFIG = {
        id: "highlite",
        name: "Highlite",
        description: "i18n.collectors.highlite.description",
        version: "0",
        website: "https://www.highlite.com/en/customer/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210967.jpg",
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
        entryUrl: "https://www.highlite.com/en/customer/account/",
    }

    constructor() {
        super(HighliteCollector.CONFIG);
    }
}
