
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WelcomeOfficeCollector extends SketchCollector {

    static CONFIG = {
        id: "welcome_office",
        name: "Welcome Office",
        description: "i18n.collectors.welcome_office.description",
        version: "0",
        website: "https://www.welcomeoffice.com/UserAccount_V3/Authentification.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124011.jpg",
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
        loginUrl: "https://www.welcomeoffice.com/UserAccount_V3/Authentification.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WelcomeOfficeCollector.CONFIG);
    }
}
