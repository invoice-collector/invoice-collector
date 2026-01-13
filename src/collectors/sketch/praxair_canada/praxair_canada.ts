
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PraxairCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "praxair_canada",
        name: "Praxair Canada",
        description: "i18n.collectors.praxair_canada.description",
        version: "0",
        website: "https://xprspay.ipayxepay.net/xprspay/praxaircanada/index.jsp?resource=signon",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/383293.jpg",
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
        loginUrl: "https://xprspay.ipayxepay.net/xprspay/praxaircanada/index.jsp?resource=signon",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PraxairCanadaCollector.CONFIG);
    }
}
