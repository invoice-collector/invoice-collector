
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DreamhostPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "dreamhost_partners",
        name: "Dreamhost Partners",
        description: "i18n.collectors.dreamhost_partners.description",
        version: "0",
        website: "https://aff-dreamhost.pay.tune.com/payment-orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2135725.jpg",
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
        loginUrl: "https://aff-dreamhost.pay.tune.com/payment-orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DreamhostPartnersCollector.CONFIG);
    }
}
