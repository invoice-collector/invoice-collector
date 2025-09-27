
import { SketchCollector } from '../../sketchCollector';

export class FontbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "fontbase",
        name: "Fontbase",
        description: "i18n.collectors.fontbase.description",
        version: "0",
        website: "https://web.fontba.se/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1781388.jpg",
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
        entryUrl: "https://web.fontba.se/account/billing",
    }

    constructor() {
        super(FontbaseCollector.CONFIG);
    }
}
