
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebDeEmergieCollector extends SketchCollector {

    static CONFIG = {
        id: "web_de_emergie",
        name: "WEB.DE Emergie",
        description: "i18n.collectors.web_de_emergie.description",
        version: "0",
        website: "https://kundenportal.energie.web.de/index.php?page=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037311.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://kundenportal.energie.web.de/index.php?page=login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebDeEmergieCollector.CONFIG);
    }
}
