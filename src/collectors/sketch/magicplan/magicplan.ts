
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MagicplanCollector extends SketchCollector {

    static CONFIG = {
        id: "magicplan",
        name: "magicplan",
        description: "i18n.collectors.magicplan.description",
        version: "0",
        website: "https://cloud.magicplan.app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/820574.jpg",
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
        loginUrl: "https://cloud.magicplan.app/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MagicplanCollector.CONFIG);
    }
}
