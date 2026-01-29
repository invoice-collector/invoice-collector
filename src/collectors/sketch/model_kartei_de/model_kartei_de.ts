
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ModelKarteiDeCollector extends SketchCollector {

    static CONFIG = {
        id: "model_kartei_de",
        name: "model-kartei.de",
        description: "i18n.collectors.model_kartei_de.description",
        version: "0",
        website: "https://www.model-kartei.de/vip/rechnung/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2066544.jpg",
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
        loginUrl: "https://www.model-kartei.de/vip/rechnung/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ModelKarteiDeCollector.CONFIG);
    }
}
