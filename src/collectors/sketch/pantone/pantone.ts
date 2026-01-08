
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PantoneCollector extends SketchCollector {

    static CONFIG = {
        id: "pantone",
        name: "Pantone",
        description: "i18n.collectors.pantone.description",
        version: "0",
        website: "https://www.pantone.com/hk/en/customer/account/create",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035298.jpg",
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
        loginUrl: "https://www.pantone.com/hk/en/customer/account/create",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PantoneCollector.CONFIG);
    }
}
