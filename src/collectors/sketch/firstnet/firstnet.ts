
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FirstnetCollector extends SketchCollector {

    static CONFIG = {
        id: "firstnet",
        name: "FirstNet",
        description: "i18n.collectors.firstnet.description",
        version: "0",
        website: "https://fcontent.att.com/dynamic/iamLRR/LrrController?IAM_OP=login&appName=m14332&refIDFromLogin=1541049028233_438116189_P&targetURL=https%3A%2F%2Foidc.idp.flogin.att.com%2Fisam%2Foidc%2Fendpoint%2Famapp-runtime-PSE%2Fauthorize%3Fresponse_type%3Did_token%",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88513.jpg",
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
        loginUrl: "https://fcontent.att.com/dynamic/iamLRR/LrrController?IAM_OP=login&appName=m14332&refIDFromLogin=1541049028233_438116189_P&targetURL=https%3A%2F%2Foidc.idp.flogin.att.com%2Fisam%2Foidc%2Fendpoint%2Famapp-runtime-PSE%2Fauthorize%3Fresponse_type%3Did_token%",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FirstnetCollector.CONFIG);
    }
}
