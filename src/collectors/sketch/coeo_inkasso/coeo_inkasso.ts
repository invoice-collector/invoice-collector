
import { SketchCollector } from '../../sketchCollector';

export class CoeoInkassoCollector extends SketchCollector {

    static CONFIG = {
        id: "coeo_inkasso",
        name: "COEO INKASSO",
        description: "i18n.collectors.coeo_inkasso.description",
        version: "0",
        website: "https://coeo-mandanten.de/Account/Login?ReturnUrl=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413104.jpg",
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
        entryUrl: "https://coeo-mandanten.de/Account/Login?ReturnUrl=%2F",
    }

    constructor() {
        super(CoeoInkassoCollector.CONFIG);
    }
}
