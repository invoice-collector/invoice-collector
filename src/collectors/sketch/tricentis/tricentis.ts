
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TricentisCollector extends SketchCollector {

    static CONFIG = {
        id: "tricentis",
        name: "Tricentis",
        description: "i18n.collectors.tricentis.description",
        version: "0",
        website: "https://support.tricentis.com/community/home.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6055.jpg",
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
        loginUrl: "https://support.tricentis.com/community/home.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TricentisCollector.CONFIG);
    }
}
