
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RVMaklerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "r_v_maklerportal",
        name: "R+V Maklerportal",
        description: "i18n.collectors.r_v_maklerportal.description",
        version: "0",
        website: "https://online.ruv.de/makler/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226574.jpg",
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
        loginUrl: "https://online.ruv.de/makler/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RVMaklerportalCollector.CONFIG);
    }
}
