
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ServmaskCollector extends SketchCollector {

    static CONFIG = {
        id: "servmask",
        name: "ServMask",
        description: "i18n.collectors.servmask.description",
        version: "0",
        website: "https://servmask.com/subscription/fee64cdd-78c0-4b79-82eb-54134e2db720/billing-details",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1428425.jpg",
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
        loginUrl: "https://servmask.com/subscription/fee64cdd-78c0-4b79-82eb-54134e2db720/billing-details",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ServmaskCollector.CONFIG);
    }
}
