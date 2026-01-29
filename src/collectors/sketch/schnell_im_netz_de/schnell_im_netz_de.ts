
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SchnellImNetzDeCollector extends SketchCollector {

    static CONFIG = {
        id: "schnell_im_netz_de",
        name: "schnell-im-netz.de",
        description: "i18n.collectors.schnell_im_netz_de.description",
        version: "0",
        website: "https://schnell-im-netz.de/customer/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9463.jpg",
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
        loginUrl: "https://schnell-im-netz.de/customer/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SchnellImNetzDeCollector.CONFIG);
    }
}
