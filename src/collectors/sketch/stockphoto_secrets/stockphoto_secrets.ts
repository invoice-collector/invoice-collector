
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StockphotoSecretsCollector extends SketchCollector {

    static CONFIG = {
        id: "stockphoto_secrets",
        name: "Stockphoto Secrets",
        description: "i18n.collectors.stockphoto_secrets.description",
        version: "0",
        website: "http://shop.stockphotosecrets.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32572.jpg",
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
        loginUrl: "http://shop.stockphotosecrets.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StockphotoSecretsCollector.CONFIG);
    }
}
