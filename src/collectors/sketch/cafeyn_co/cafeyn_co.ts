
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CafeynCoCollector extends SketchCollector {

    static CONFIG = {
        id: "cafeyn_co",
        name: "Cafeyn.co",
        description: "i18n.collectors.cafeyn_co.description",
        version: "0",
        website: "https://www.cafeyn.co/fr/publication/l-argus/21844253",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3340394.jpg",
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
        loginUrl: "https://www.cafeyn.co/fr/publication/l-argus/21844253",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CafeynCoCollector.CONFIG);
    }
}
