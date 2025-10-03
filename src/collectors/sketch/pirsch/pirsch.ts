
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PirschCollector extends SketchCollector {

    static CONFIG = {
        id: "pirsch",
        name: "pirsch",
        description: "i18n.collectors.pirsch.description",
        version: "0",
        website: "https://dashboard.pirsch.io/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2797971.jpg",
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
        entryUrl: "https://dashboard.pirsch.io/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PirschCollector.CONFIG);
    }
}
