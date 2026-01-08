
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HansemerkurGruppenvertragspartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "hansemerkur_gruppenvertragspartner",
        name: "Hansemerkur Gruppenvertragspartner",
        description: "i18n.collectors.hansemerkur_gruppenvertragspartner.description",
        version: "0",
        website: "https://groupie.hansemerkur.de/oauth2/authorization/kobil-grpdezentral-login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4175839.jpg",
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
        loginUrl: "https://groupie.hansemerkur.de/oauth2/authorization/kobil-grpdezentral-login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HansemerkurGruppenvertragspartnerCollector.CONFIG);
    }
}
