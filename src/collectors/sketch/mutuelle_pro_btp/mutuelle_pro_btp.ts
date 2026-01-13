
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleProBtpCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_pro_btp",
        name: "Mutuelle Pro BTP",
        description: "i18n.collectors.mutuelle_pro_btp.description",
        version: "0",
        website: "https://www.probtp.com/ext/parAccueil.do?accueil=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130351.jpg",
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
        loginUrl: "https://www.probtp.com/ext/parAccueil.do?accueil=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleProBtpCollector.CONFIG);
    }
}
