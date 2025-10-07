
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TallyCollector extends SketchCollector {

    static CONFIG = {
        id: "tally",
        name: "Tally",
        description: "i18n.collectors.tally.description",
        version: "0",
        website: "https://tally.so/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1210765.jpg",
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
        entryUrl: "https://tally.so/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TallyCollector.CONFIG);
    }
}
