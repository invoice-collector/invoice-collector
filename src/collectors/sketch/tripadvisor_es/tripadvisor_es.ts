
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TripadvisorEsCollector extends SketchCollector {

    static CONFIG = {
        id: "tripadvisor_es",
        name: "Tripadvisor (.es)",
        description: "i18n.collectors.tripadvisor_es.description",
        version: "0",
        website: "https://www.tripadvisor.es/BillingAndPayments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119978.jpg",
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
        loginUrl: "https://www.tripadvisor.es/BillingAndPayments",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TripadvisorEsCollector.CONFIG);
    }
}
