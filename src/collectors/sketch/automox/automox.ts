
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AutomoxCollector extends SketchCollector {

    static CONFIG = {
        id: "automox",
        name: "Automox",
        description: "i18n.collectors.automox.description",
        version: "0",
        website: "https://console.automox.com/settings?o=9311",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170785.jpg",
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
        entryUrl: "https://console.automox.com/settings?o=9311",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AutomoxCollector.CONFIG);
    }
}
