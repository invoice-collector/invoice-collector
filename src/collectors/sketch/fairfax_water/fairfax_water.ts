
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FairfaxWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "fairfax_water",
        name: "Fairfax Water",
        description: "i18n.collectors.fairfax_water.description",
        version: "0",
        website: "https://fwcustomer.org/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723588.jpg",
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
        loginUrl: "https://fwcustomer.org/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FairfaxWaterCollector.CONFIG);
    }
}
