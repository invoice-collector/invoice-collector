
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AxonautCollector extends SketchCollector {

    static CONFIG = {
        id: "axonaut",
        name: "Axonaut",
        description: "i18n.collectors.axonaut.description",
        version: "0",
        website: "https://axonaut.com/account/rocket/creditList",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428738.jpg",
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
        loginUrl: "https://axonaut.com/account/rocket/creditList",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AxonautCollector.CONFIG);
    }
}
