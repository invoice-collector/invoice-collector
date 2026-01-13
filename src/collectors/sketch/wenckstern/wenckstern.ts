
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WencksternCollector extends SketchCollector {

    static CONFIG = {
        id: "wenckstern",
        name: "Wenckstern",
        description: "i18n.collectors.wenckstern.description",
        version: "0",
        website: "https://www.wenckstern-shop.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4388653.jpg",
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
        loginUrl: "https://www.wenckstern-shop.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WencksternCollector.CONFIG);
    }
}
