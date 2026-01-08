
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MichelinPasrelComCollector extends SketchCollector {

    static CONFIG = {
        id: "michelin_pasrel_com",
        name: "Michelin - pasrel.com",
        description: "i18n.collectors.michelin_pasrel_com.description",
        version: "0",
        website: "https://www.pasrel.com/metiers/michelin/ConsulterFactures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612091.jpg",
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
        loginUrl: "https://www.pasrel.com/metiers/michelin/ConsulterFactures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MichelinPasrelComCollector.CONFIG);
    }
}
