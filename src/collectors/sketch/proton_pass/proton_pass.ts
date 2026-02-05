
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ProtonPassCollector extends SketchCollector {

    static CONFIG = {
        id: "proton_pass",
        name: "Proton Pass",
        description: "i18n.collectors.proton_pass.description",
        version: "0",
        website: "https://account.proton.me/reauth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4465746.jpg",
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
        loginUrl: "https://account.proton.me/reauth",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ProtonPassCollector.CONFIG);
    }
}
