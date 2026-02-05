
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SaiSubscriptionsCollector extends SketchCollector {

    static CONFIG = {
        id: "sai_subscriptions",
        name: "SAi Subscriptions",
        description: "i18n.collectors.sai_subscriptions.description",
        version: "0",
        website: "https://www.saisubscriptions.com/?invoices=open",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4491397.jpg",
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
        loginUrl: "https://www.saisubscriptions.com/?invoices=open",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SaiSubscriptionsCollector.CONFIG);
    }
}
