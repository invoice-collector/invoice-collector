
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SamanageCollector extends SketchCollector {

    static CONFIG = {
        id: "samanage",
        name: "Samanage",
        description: "i18n.collectors.samanage.description",
        version: "0",
        website: "https://app.samanage.com/login?__hstc=51647990.d84476cbbd3b08dda93ec1928db6b9ac.1507205787897.1507807104393.1507818450583.13&__hssc=51647990.7.1507818450583&__hsfp=1414170404&_ga=2.226858654.2016000231.1523347662-973992629.1523347662",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6471.jpg",
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
        loginUrl: "https://app.samanage.com/login?__hstc=51647990.d84476cbbd3b08dda93ec1928db6b9ac.1507205787897.1507807104393.1507818450583.13&__hssc=51647990.7.1507818450583&__hsfp=1414170404&_ga=2.226858654.2016000231.1523347662-973992629.1523347662",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SamanageCollector.CONFIG);
    }
}
