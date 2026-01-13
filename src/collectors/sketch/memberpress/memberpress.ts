
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MemberpressCollector extends SketchCollector {

    static CONFIG = {
        id: "memberpress",
        name: "MemberPress",
        description: "i18n.collectors.memberpress.description",
        version: "0",
        website: "https://memberpress.com/account/?action=payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167028.jpg",
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
        loginUrl: "https://memberpress.com/account/?action=payments",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MemberpressCollector.CONFIG);
    }
}
