
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlliantCollector extends SketchCollector {

    static CONFIG = {
        id: "alliant",
        name: "ALLIANT",
        description: "i18n.collectors.alliant.description",
        version: "0",
        website: "https://www.alliantcreditunion.com/onlinebanking/Accounts/Statements/Estatement.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/432660.jpg",
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
        loginUrl: "https://www.alliantcreditunion.com/onlinebanking/Accounts/Statements/Estatement.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlliantCollector.CONFIG);
    }
}
