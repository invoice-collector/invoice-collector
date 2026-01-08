
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class A2xCollector extends SketchCollector {

    static CONFIG = {
        id: "a2x",
        name: "a2x",
        description: "i18n.collectors.a2x.description",
        version: "0",
        website: "https://accounts.google.com/signin/v2/sl/pwd?service=ah&passive=true&continue=https%3A%2F%2Fappengine.google.com%2F_ah%2Fconflogin%3Fcontinue%3Dhttps%3A%2F%2Fwww.a2xaccounting.com%2Fadmin&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44087.jpg",
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
        loginUrl: "https://accounts.google.com/signin/v2/sl/pwd?service=ah&passive=true&continue=https%3A%2F%2Fappengine.google.com%2F_ah%2Fconflogin%3Fcontinue%3Dhttps%3A%2F%2Fwww.a2xaccounting.com%2Fadmin&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(A2xCollector.CONFIG);
    }
}
