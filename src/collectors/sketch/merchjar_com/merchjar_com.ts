
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MerchjarComCollector extends SketchCollector {

    static CONFIG = {
        id: "merchjar_com",
        name: "Merchjar.com",
        description: "i18n.collectors.merchjar_com.description",
        version: "0",
        website: "https://billing.stripe.com/session/live_YWNjdF8xSU9KbnpJdHBYWUFzRlQ0LF9Mbm9CTDdEczFIMkxTZkVjcXczM2p1Vkl4bzdDR1hw0100AUloo4Sf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1271798.jpg",
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
        loginUrl: "https://billing.stripe.com/session/live_YWNjdF8xSU9KbnpJdHBYWUFzRlQ0LF9Mbm9CTDdEczFIMkxTZkVjcXczM2p1Vkl4bzdDR1hw0100AUloo4Sf",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MerchjarComCollector.CONFIG);
    }
}
