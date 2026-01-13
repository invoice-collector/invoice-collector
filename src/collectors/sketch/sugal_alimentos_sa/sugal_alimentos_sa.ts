
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SugalAlimentosSaCollector extends SketchCollector {

    static CONFIG = {
        id: "sugal_alimentos_sa",
        name: "Sugal Alimentos SA",
        description: "i18n.collectors.sugal_alimentos_sa.description",
        version: "0",
        website: "https://einvoice.generixpt.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801075.jpg",
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
        loginUrl: "https://einvoice.generixpt.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SugalAlimentosSaCollector.CONFIG);
    }
}
