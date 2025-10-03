
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AralOnefleetCollector extends SketchCollector {

    static CONFIG = {
        id: "aral_onefleet",
        name: "Aral OneFleet",
        description: "i18n.collectors.aral_onefleet.description",
        version: "0",
        website: "https://onefleet.aral.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200267.jpg",
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
        entryUrl: "https://onefleet.aral.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AralOnefleetCollector.CONFIG);
    }
}
