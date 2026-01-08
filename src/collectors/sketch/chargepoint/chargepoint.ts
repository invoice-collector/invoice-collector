
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChargepointCollector extends SketchCollector {

    static CONFIG = {
        id: "chargepoint",
        name: "Chargepoint",
        description: "i18n.collectors.chargepoint.description",
        version: "0",
        website: "https://driver.chargepoint.com/monthly-statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038786.jpg",
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
        loginUrl: "https://driver.chargepoint.com/monthly-statements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChargepointCollector.CONFIG);
    }
}
