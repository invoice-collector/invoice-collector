
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HvvSwitchCollector extends SketchCollector {

    static CONFIG = {
        id: "hvv_switch",
        name: "hvv switch",
        description: "i18n.collectors.hvv_switch.description",
        version: "0",
        website: "https://www.hvv-switch.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1769548.jpg",
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
        entryUrl: "https://www.hvv-switch.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HvvSwitchCollector.CONFIG);
    }
}
