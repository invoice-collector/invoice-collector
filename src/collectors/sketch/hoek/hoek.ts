
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HoekCollector extends SketchCollector {

    static CONFIG = {
        id: "hoek",
        name: "Hoek",
        description: "i18n.collectors.hoek.description",
        version: "0",
        website: "https://www.hoekflowers.com/fr-fr/Service/Factuur",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534369.jpg",
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
        loginUrl: "https://www.hoekflowers.com/fr-fr/Service/Factuur",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HoekCollector.CONFIG);
    }
}
