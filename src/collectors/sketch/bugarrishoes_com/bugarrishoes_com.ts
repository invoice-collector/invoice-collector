
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BugarrishoesComCollector extends SketchCollector {

    static CONFIG = {
        id: "bugarrishoes_com",
        name: "Bugarrishoes.com",
        description: "i18n.collectors.bugarrishoes_com.description",
        version: "0",
        website: "https://www.bugarrishoes.com/?page=customerservice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21950.jpg",
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
        loginUrl: "https://www.bugarrishoes.com/?page=customerservice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BugarrishoesComCollector.CONFIG);
    }
}
