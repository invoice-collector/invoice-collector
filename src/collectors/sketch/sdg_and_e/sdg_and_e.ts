
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SdgAndECollector extends SketchCollector {

    static CONFIG = {
        id: "sdg_and_e",
        name: "SDG&E",
        description: "i18n.collectors.sdg_and_e.description",
        version: "0",
        website: "https://myaccount.sdge.com/portal/PreLogin/Validate",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2694558.jpg",
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
        loginUrl: "https://myaccount.sdge.com/portal/PreLogin/Validate",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SdgAndECollector.CONFIG);
    }
}
