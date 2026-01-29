
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ATUCardCollector extends SketchCollector {

    static CONFIG = {
        id: "a_t_u_card",
        name: "A.T.U Card",
        description: "i18n.collectors.a_t_u_card.description",
        version: "0",
        website: "https://www.atu.de/pages/service/atucard/persoenlicherzugang/kontouebersicht.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919601.jpg",
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
        loginUrl: "https://www.atu.de/pages/service/atucard/persoenlicherzugang/kontouebersicht.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ATUCardCollector.CONFIG);
    }
}
