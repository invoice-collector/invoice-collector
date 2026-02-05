
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PharmaMallCollector extends SketchCollector {

    static CONFIG = {
        id: "pharma_mall",
        name: "Pharma Mall",
        description: "i18n.collectors.pharma_mall.description",
        version: "0",
        website: "https://www.pharma-mall.de/shop/vendors",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413901.jpg",
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
        loginUrl: "https://www.pharma-mall.de/shop/vendors",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PharmaMallCollector.CONFIG);
    }
}
