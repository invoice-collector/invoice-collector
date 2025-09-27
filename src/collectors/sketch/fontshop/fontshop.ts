
import { SketchCollector } from '../../sketchCollector';

export class FontshopCollector extends SketchCollector {

    static CONFIG = {
        id: "fontshop",
        name: "Fontshop",
        description: "i18n.collectors.fontshop.description",
        version: "0",
        website: "https://www.fontshop.com/buy/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439564.jpg",
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
        entryUrl: "https://www.fontshop.com/buy/history",
    }

    constructor() {
        super(FontshopCollector.CONFIG);
    }
}
