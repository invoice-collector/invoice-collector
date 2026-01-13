
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeBijenkorfCollector extends SketchCollector {

    static CONFIG = {
        id: "de_bijenkorf",
        name: "de Bijenkorf",
        description: "i18n.collectors.de_bijenkorf.description",
        version: "0",
        website: "https://www.debijenkorf.nl/mijn-account/#mijn-aankopen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1239200.jpg",
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
        loginUrl: "https://www.debijenkorf.nl/mijn-account/#mijn-aankopen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeBijenkorfCollector.CONFIG);
    }
}
