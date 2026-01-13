
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EdcoCollector extends SketchCollector {

    static CONFIG = {
        id: "edco",
        name: "EDCO",
        description: "i18n.collectors.edco.description",
        version: "0",
        website: "https://secure.myonlinebill.com/mob/user/login.do?clientId=MTA4Nzc=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4179045.jpg",
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
        loginUrl: "https://secure.myonlinebill.com/mob/user/login.do?clientId=MTA4Nzc=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdcoCollector.CONFIG);
    }
}
