
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AcuitySchedulingCollector extends SketchCollector {

    static CONFIG = {
        id: "acuity_scheduling",
        name: "Acuity Scheduling",
        description: "i18n.collectors.acuity_scheduling.description",
        version: "0",
        website: "https://secure.acuityscheduling.com/preferences.php?action=myaccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21721.jpg",
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
        loginUrl: "https://secure.acuityscheduling.com/preferences.php?action=myaccount",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AcuitySchedulingCollector.CONFIG);
    }
}
