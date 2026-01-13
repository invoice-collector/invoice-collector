
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EasternPropaneAndOilCollector extends SketchCollector {

    static CONFIG = {
        id: "eastern_propane_and_oil",
        name: "Eastern Propane & Oil",
        description: "i18n.collectors.eastern_propane_and_oil.description",
        version: "0",
        website: "https://myaccount.eastern.com/accountSummary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4639881.jpg",
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
        loginUrl: "https://myaccount.eastern.com/accountSummary",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasternPropaneAndOilCollector.CONFIG);
    }
}
