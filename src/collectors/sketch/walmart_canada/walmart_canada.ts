
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WalmartCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "walmart_canada",
        name: "Walmart Canada",
        description: "i18n.collectors.walmart_canada.description",
        version: "0",
        website: "https://www.walmart.ca/en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63499.jpg",
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
        loginUrl: "https://www.walmart.ca/en",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WalmartCanadaCollector.CONFIG);
    }
}
