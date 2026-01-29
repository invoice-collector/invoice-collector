
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FuturumshopNlCollector extends SketchCollector {

    static CONFIG = {
        id: "futurumshop_nl",
        name: "Futurumshop.nl",
        description: "i18n.collectors.futurumshop_nl.description",
        version: "0",
        website: "https://www.futurumshop.nl/?action=auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32703.jpg",
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
        loginUrl: "https://www.futurumshop.nl/?action=auth/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FuturumshopNlCollector.CONFIG);
    }
}
