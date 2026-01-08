
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdobeStockCollector extends SketchCollector {

    static CONFIG = {
        id: "adobe_stock",
        name: "Adobe Stock",
        description: "i18n.collectors.adobe_stock.description",
        version: "0",
        website: "https://stock.adobe.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44824.jpg",
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
        loginUrl: "https://stock.adobe.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdobeStockCollector.CONFIG);
    }
}
