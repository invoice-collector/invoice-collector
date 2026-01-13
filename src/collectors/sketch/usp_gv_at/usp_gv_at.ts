
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UspGvAtCollector extends SketchCollector {

    static CONFIG = {
        id: "usp_gv_at",
        name: "USP.gv.at",
        description: "i18n.collectors.usp_gv_at.description",
        version: "0",
        website: "https://www.usp.gv.at/at.gv.mpk-p/portal/main?resetFolder",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/553311.jpg",
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
        loginUrl: "https://www.usp.gv.at/at.gv.mpk-p/portal/main?resetFolder",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UspGvAtCollector.CONFIG);
    }
}
