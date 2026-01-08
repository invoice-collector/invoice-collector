
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PubnubCollector extends SketchCollector {

    static CONFIG = {
        id: "pubnub",
        name: "PubNub",
        description: "i18n.collectors.pubnub.description",
        version: "0",
        website: "https://admin.pubnub.com/#/user/573012/account/572963/plans-and-billing?tab=invoices-and-costs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1302701.jpg",
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
        loginUrl: "https://admin.pubnub.com/#/user/573012/account/572963/plans-and-billing?tab=invoices-and-costs",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PubnubCollector.CONFIG);
    }
}
