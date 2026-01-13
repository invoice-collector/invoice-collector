
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GappsExpertsCollector extends SketchCollector {

    static CONFIG = {
        id: "gapps_experts",
        name: "Gapps Experts",
        description: "i18n.collectors.gapps_experts.description",
        version: "0",
        website: "https://billing.gappsexperts.com/app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1233727.jpg",
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
        loginUrl: "https://billing.gappsexperts.com/app/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GappsExpertsCollector.CONFIG);
    }
}
