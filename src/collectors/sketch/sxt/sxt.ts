
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SxtCollector extends SketchCollector {

    static CONFIG = {
        id: "sxt",
        name: "SXT",
        description: "i18n.collectors.sxt.description",
        version: "0",
        website: "https://www.sxt-scooters.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/180723.jpg",
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
        loginUrl: "https://www.sxt-scooters.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SxtCollector.CONFIG);
    }
}
