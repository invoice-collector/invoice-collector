
import { SketchCollector } from '../../sketchCollector';

export class WisoMeinBuroWebCollector extends SketchCollector {

    static CONFIG = {
        id: "wiso_mein_buro_web",
        name: "WISO Mein Buro WEB",
        description: "i18n.collectors.wiso_mein_buro_web.description",
        version: "0",
        website: "https://app.meinbuero.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1487111.jpg",
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
        entryUrl: "https://app.meinbuero.de/",
    }

    constructor() {
        super(WisoMeinBuroWebCollector.CONFIG);
    }
}
