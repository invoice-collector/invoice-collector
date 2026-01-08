
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyproteinCollector extends SketchCollector {

    static CONFIG = {
        id: "myprotein",
        name: "Myprotein",
        description: "i18n.collectors.myprotein.description",
        version: "0",
        website: "https://de.myprotein.com/login.jsp?returnTo=https%3A%2F%2Fde.myprotein.com%2FaccountHome.account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45060.jpg",
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
        loginUrl: "https://de.myprotein.com/login.jsp?returnTo=https%3A%2F%2Fde.myprotein.com%2FaccountHome.account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyproteinCollector.CONFIG);
    }
}
