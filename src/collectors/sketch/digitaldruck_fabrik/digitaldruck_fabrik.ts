
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DigitaldruckFabrikCollector extends SketchCollector {

    static CONFIG = {
        id: "digitaldruck_fabrik",
        name: "digitaldruck fabrik",
        description: "i18n.collectors.digitaldruck_fabrik.description",
        version: "0",
        website: "https://www.digitaldruck-fabrik.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7282.jpg",
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
        entryUrl: "https://www.digitaldruck-fabrik.de/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigitaldruckFabrikCollector.CONFIG);
    }
}
