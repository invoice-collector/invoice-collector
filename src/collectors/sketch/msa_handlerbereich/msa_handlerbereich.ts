
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MsaHandlerbereichCollector extends SketchCollector {

    static CONFIG = {
        id: "msa_handlerbereich",
        name: "MSA Handlerbereich",
        description: "i18n.collectors.msa_handlerbereich.description",
        version: "0",
        website: "https://www.haendlerbereich.de/index.php?x=11&y=9&Filter_Marke=KY&Filter_h=serv&Filter_s=home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1351230.jpg",
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
        loginUrl: "https://www.haendlerbereich.de/index.php?x=11&y=9&Filter_Marke=KY&Filter_h=serv&Filter_s=home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MsaHandlerbereichCollector.CONFIG);
    }
}
