
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WasteResourcesCollector extends SketchCollector {

    static CONFIG = {
        id: "waste_resources",
        name: "Waste Resources",
        description: "i18n.collectors.waste_resources.description",
        version: "0",
        website: "https://wrk-prd-tow-etr.amcsplatform.com/WR/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176340.jpg",
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
        loginUrl: "https://wrk-prd-tow-etr.amcsplatform.com/WR/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WasteResourcesCollector.CONFIG);
    }
}
