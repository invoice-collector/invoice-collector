
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FloridaNaturalGasCollector extends SketchCollector {

    static CONFIG = {
        id: "florida_natural_gas",
        name: "Florida Natural Gas",
        description: "i18n.collectors.florida_natural_gas.description",
        version: "0",
        website: "https://click.onlyfng.com/BillingHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723587.jpg",
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
        loginUrl: "https://click.onlyfng.com/BillingHistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FloridaNaturalGasCollector.CONFIG);
    }
}
