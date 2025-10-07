
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MotionTmPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "motion_tm_partner",
        name: "Motion TM Partner",
        description: "i18n.collectors.motion_tm_partner.description",
        version: "0",
        website: "https://partner.motion-tm.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/797693.jpg",
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
        entryUrl: "https://partner.motion-tm.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MotionTmPartnerCollector.CONFIG);
    }
}
