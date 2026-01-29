
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiexAtCollector extends SketchCollector {

    static CONFIG = {
        id: "miex_at",
        name: "mieX.at",
        description: "i18n.collectors.miex_at.description",
        version: "0",
        website: "http://www.miex.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9265.jpg",
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
        loginUrl: "http://www.miex.at",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MiexAtCollector.CONFIG);
    }
}
