
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TeslaHandschuhfachCollector extends SketchCollector {

    static CONFIG = {
        id: "tesla_handschuhfach",
        name: "Tesla Handschuhfach",
        description: "i18n.collectors.tesla_handschuhfach.description",
        version: "0",
        website: "https://www.tesla.com/de_DE/teslaaccount/ownership?rn=RN114491712",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1317274.jpg",
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
        loginUrl: "https://www.tesla.com/de_DE/teslaaccount/ownership?rn=RN114491712",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TeslaHandschuhfachCollector.CONFIG);
    }
}
