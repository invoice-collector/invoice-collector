
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MedicompCollector extends SketchCollector {

    static CONFIG = {
        id: "medicomp",
        name: "medicomp",
        description: "i18n.collectors.medicomp.description",
        version: "0",
        website: "https://www.mip-ekv.de/mip.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167040.jpg",
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
        loginUrl: "https://www.mip-ekv.de/mip.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MedicompCollector.CONFIG);
    }
}
