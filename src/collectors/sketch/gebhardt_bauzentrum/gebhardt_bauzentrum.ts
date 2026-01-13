
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GebhardtBauzentrumCollector extends SketchCollector {

    static CONFIG = {
        id: "gebhardt_bauzentrum",
        name: "Gebhardt Bauzentrum",
        description: "i18n.collectors.gebhardt_bauzentrum.description",
        version: "0",
        website: "https://www.gebhardt-shop.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/426747.jpg",
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
        loginUrl: "https://www.gebhardt-shop.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GebhardtBauzentrumCollector.CONFIG);
    }
}
