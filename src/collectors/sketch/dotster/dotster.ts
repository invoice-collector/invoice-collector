
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DotsterCollector extends SketchCollector {

    static CONFIG = {
        id: "dotster",
        name: "Dotster",
        description: "i18n.collectors.dotster.description",
        version: "0",
        website: "https://www1.dotster.com/controlpanel/foundation/account/billing/paid-statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1744806.jpg",
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
        entryUrl: "https://www1.dotster.com/controlpanel/foundation/account/billing/paid-statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DotsterCollector.CONFIG);
    }
}
