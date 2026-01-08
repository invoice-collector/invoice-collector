
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CalovoCollector extends SketchCollector {

    static CONFIG = {
        id: "calovo",
        name: "calovo",
        description: "i18n.collectors.calovo.description",
        version: "0",
        website: "https://calpit.calovo.com/user/account?anchor=addon-tab-tab",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297683.jpg",
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
        loginUrl: "https://calpit.calovo.com/user/account?anchor=addon-tab-tab",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CalovoCollector.CONFIG);
    }
}
