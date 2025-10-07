
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PinwheelCollector extends SketchCollector {

    static CONFIG = {
        id: "pinwheel",
        name: "Pinwheel",
        description: "i18n.collectors.pinwheel.description",
        version: "0",
        website: "https://paybypinwheel.com/dashboard/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777221.jpg",
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
        entryUrl: "https://paybypinwheel.com/dashboard/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PinwheelCollector.CONFIG);
    }
}
