
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CanadaLifeCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "canada_life_canada",
        name: "Canada Life - Canada",
        description: "i18n.collectors.canada_life_canada.description",
        version: "0",
        website: "https://groupnet-pa.canadalife.com/secureGnRTE/english/Billing/BPT3.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732655.jpg",
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
        loginUrl: "https://groupnet-pa.canadalife.com/secureGnRTE/english/Billing/BPT3.asp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CanadaLifeCanadaCollector.CONFIG);
    }
}
