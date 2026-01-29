
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AirBpCollector extends SketchCollector {

    static CONFIG = {
        id: "air_bp",
        name: "Air bp",
        description: "i18n.collectors.air_bp.description",
        version: "0",
        website: "https://myinvoice.bpglobal.com/sites/airbp#AirBP-Invoice_Bundles&/bundles",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2765217.jpg",
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
        loginUrl: "https://myinvoice.bpglobal.com/sites/airbp#AirBP-Invoice_Bundles&/bundles",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AirBpCollector.CONFIG);
    }
}
