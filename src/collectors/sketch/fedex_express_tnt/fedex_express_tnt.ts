
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FedexExpressTntCollector extends SketchCollector {

    static CONFIG = {
        id: "fedex_express_tnt",
        name: "Fedex Express - TNT",
        description: "i18n.collectors.fedex_express_tnt.description",
        version: "0",
        website: "https://esipub.esi-sa.com/TNT_Archive/archive/document",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3025675.jpg",
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
        loginUrl: "https://esipub.esi-sa.com/TNT_Archive/archive/document",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FedexExpressTntCollector.CONFIG);
    }
}
