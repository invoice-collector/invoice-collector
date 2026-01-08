
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeutscherAnwaltvereinEVCollector extends SketchCollector {

    static CONFIG = {
        id: "deutscher_anwaltverein_e_v",
        name: "Deutscher Anwaltverein e.V",
        description: "i18n.collectors.deutscher_anwaltverein_e_v.description",
        version: "0",
        website: "https://www.portal-anwaltverein.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612139.jpg",
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
        loginUrl: "https://www.portal-anwaltverein.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeutscherAnwaltvereinEVCollector.CONFIG);
    }
}
