
import { SketchCollector } from '../../sketchCollector';

export class VetsxlCollector extends SketchCollector {

    static CONFIG = {
        id: "vetsxl",
        name: "vetsXL",
        description: "i18n.collectors.vetsxl.description",
        version: "0",
        website: "https://www.myvetsxl.com/de/Konto/Konto_Rechnungen/Default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2705615.jpg",
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
        entryUrl: "https://www.myvetsxl.com/de/Konto/Konto_Rechnungen/Default.aspx",
    }

    constructor() {
        super(VetsxlCollector.CONFIG);
    }
}
