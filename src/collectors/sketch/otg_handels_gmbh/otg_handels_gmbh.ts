
import { SketchCollector } from '../../sketchCollector';

export class OtgHandelsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "otg_handels_gmbh",
        name: "OTG Handels GmbH",
        description: "i18n.collectors.otg_handels_gmbh.description",
        version: "0",
        website: "https://shop.otg-handel.de/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1218021.jpg",
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
        entryUrl: "https://shop.otg-handel.de/user/login",
    }

    constructor() {
        super(OtgHandelsGmbhCollector.CONFIG);
    }
}
