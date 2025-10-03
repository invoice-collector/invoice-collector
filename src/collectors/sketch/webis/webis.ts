
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebisCollector extends SketchCollector {

    static CONFIG = {
        id: "webis",
        name: "Webis",
        description: "i18n.collectors.webis.description",
        version: "0",
        website: "https://www.hostwebis.com/billing/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9460.jpg",
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
        entryUrl: "https://www.hostwebis.com/billing/clientarea.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebisCollector.CONFIG);
    }
}
