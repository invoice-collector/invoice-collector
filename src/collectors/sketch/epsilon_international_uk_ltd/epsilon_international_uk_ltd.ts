
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EpsilonInternationalUkLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "epsilon_international_uk_ltd",
        name: "Epsilon International UK Ltd",
        description: "i18n.collectors.epsilon_international_uk_ltd.description",
        version: "0",
        website: "https://na2.esker.com/ondemand/webaccess/CustomerLogon.aspx?server=W03&skin=skin15&lang=en&uid=2963535A305854276F352C4A7321734441",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1941404.jpg",
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
        loginUrl: "https://na2.esker.com/ondemand/webaccess/CustomerLogon.aspx?server=W03&skin=skin15&lang=en&uid=2963535A305854276F352C4A7321734441",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EpsilonInternationalUkLtdCollector.CONFIG);
    }
}
