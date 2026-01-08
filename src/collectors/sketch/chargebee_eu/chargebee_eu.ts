
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChargebeeEuCollector extends SketchCollector {

    static CONFIG = {
        id: "chargebee_eu",
        name: "ChargeBee EU",
        description: "i18n.collectors.chargebee_eu.description",
        version: "0",
        website: "https://theargonauts.chargebee.com/users/edit_account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1259346.jpg",
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
        loginUrl: "https://theargonauts.chargebee.com/users/edit_account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChargebeeEuCollector.CONFIG);
    }
}
