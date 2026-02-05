
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FunbookerCollector extends SketchCollector {

    static CONFIG = {
        id: "funbooker",
        name: "Funbooker",
        description: "i18n.collectors.funbooker.description",
        version: "0",
        website: "https://www.funbooker.com/fr/funpro/virements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1230280.jpg",
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
        loginUrl: "https://www.funbooker.com/fr/funpro/virements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FunbookerCollector.CONFIG);
    }
}
