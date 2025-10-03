
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebhostingpadCollector extends SketchCollector {

    static CONFIG = {
        id: "webhostingpad",
        name: "WebHostingPad",
        description: "i18n.collectors.webhostingpad.description",
        version: "0",
        website: "https://secure.webhostingpad.com/billing/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8983.jpg",
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
        entryUrl: "https://secure.webhostingpad.com/billing/clientarea.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebhostingpadCollector.CONFIG);
    }
}
