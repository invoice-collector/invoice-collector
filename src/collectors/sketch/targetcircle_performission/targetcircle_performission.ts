
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TargetcirclePerformissionCollector extends SketchCollector {

    static CONFIG = {
        id: "targetcircle_performission",
        name: "TargetCircle - performission",
        description: "i18n.collectors.targetcircle_performission.description",
        version: "0",
        website: "https://performission.targetcircle.com/finance/#/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/84329.jpg",
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
        loginUrl: "https://performission.targetcircle.com/finance/#/documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TargetcirclePerformissionCollector.CONFIG);
    }
}
