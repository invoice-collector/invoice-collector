
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SouthernStarCollector extends SketchCollector {

    static CONFIG = {
        id: "southern_star",
        name: "Southern Star",
        description: "i18n.collectors.southern_star.description",
        version: "0",
        website: "https://subscribe.southernstar.ie/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4569003.jpg",
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
        loginUrl: "https://subscribe.southernstar.ie/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SouthernStarCollector.CONFIG);
    }
}
