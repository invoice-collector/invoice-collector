
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BundesanzeigerCollector extends SketchCollector {

    static CONFIG = {
        id: "bundesanzeiger",
        name: "Bundesanzeiger",
        description: "i18n.collectors.bundesanzeiger.description",
        version: "0",
        website: "https://publikations-plattform.de/sp/wexsservlet?page.navid=to_login_page&global_data.designmode=eb&dest=wexsservlet&global_data.language=de#b",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/5040.jpg",
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
        loginUrl: "https://publikations-plattform.de/sp/wexsservlet?page.navid=to_login_page&global_data.designmode=eb&dest=wexsservlet&global_data.language=de#b",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BundesanzeigerCollector.CONFIG);
    }
}
