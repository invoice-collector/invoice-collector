
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeelCollector extends SketchCollector {

    static CONFIG = {
        id: "deel",
        name: "Deel",
        description: "i18n.collectors.deel.description",
        version: "0",
        website: "https://app.letsdeel.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492107.jpg",
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
        entryUrl: "https://app.letsdeel.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeelCollector.CONFIG);
    }
}
