
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebgilityCollector extends SketchCollector {

    static CONFIG = {
        id: "webgility",
        name: "Webgility",
        description: "i18n.collectors.webgility.description",
        version: "0",
        website: "https://portal.webgility.com/billing.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/711803.jpg",
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
        entryUrl: "https://portal.webgility.com/billing.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebgilityCollector.CONFIG);
    }
}
