
import { SketchCollector } from '../../sketchCollector';

export class ZaraHomeCollector extends SketchCollector {

    static CONFIG = {
        id: "zara_home",
        name: "Zara Home",
        description: "i18n.collectors.zara_home.description",
        version: "0",
        website: "https://www.zarahome.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172783.jpg",
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
        entryUrl: "https://www.zarahome.com/de/",
    }

    constructor() {
        super(ZaraHomeCollector.CONFIG);
    }
}
