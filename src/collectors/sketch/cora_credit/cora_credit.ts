
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CoraCreditCollector extends SketchCollector {

    static CONFIG = {
        id: "cora_credit",
        name: "Cora (Credit)",
        description: "i18n.collectors.cora_credit.description",
        version: "0",
        website: "https://www.cora.fr/credit/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115987.jpg",
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
        loginUrl: "https://www.cora.fr/credit/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CoraCreditCollector.CONFIG);
    }
}
