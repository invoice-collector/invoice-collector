
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HopinCollector extends SketchCollector {

    static CONFIG = {
        id: "hopin",
        name: "Hopin",
        description: "i18n.collectors.hopin.description",
        version: "0",
        website: "https://dashboard.hopin.com/org/recode_law_42KL2CHkrue9QhIUBvMTL81md/manage/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1368225.jpg",
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
        entryUrl: "https://dashboard.hopin.com/org/recode_law_42KL2CHkrue9QhIUBvMTL81md/manage/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HopinCollector.CONFIG);
    }
}
