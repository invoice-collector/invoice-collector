
import { SketchCollector } from '../../sketchCollector';

export class ViprinetCollector extends SketchCollector {

    static CONFIG = {
        id: "viprinet",
        name: "Viprinet",
        description: "i18n.collectors.viprinet.description",
        version: "0",
        website: "https://license.vlm.support/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50631.jpg",
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
        entryUrl: "https://license.vlm.support/index.php",
    }

    constructor() {
        super(ViprinetCollector.CONFIG);
    }
}
