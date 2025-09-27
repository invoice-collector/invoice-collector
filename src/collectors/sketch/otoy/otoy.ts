
import { SketchCollector } from '../../sketchCollector';

export class OtoyCollector extends SketchCollector {

    static CONFIG = {
        id: "otoy",
        name: "Otoy",
        description: "i18n.collectors.otoy.description",
        version: "0",
        website: "https://render.otoy.com/account/purchases.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213145.jpg",
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
        entryUrl: "https://render.otoy.com/account/purchases.php",
    }

    constructor() {
        super(OtoyCollector.CONFIG);
    }
}
