
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RetailadsCollector extends SketchCollector {

    static CONFIG = {
        id: "retailads",
        name: "RetailAds",
        description: "i18n.collectors.retailads.description",
        version: "0",
        website: "https://login.retailads.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776445.jpg",
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
        loginUrl: "https://login.retailads.net",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RetailadsCollector.CONFIG);
    }
}
