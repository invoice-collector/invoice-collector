
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OrderDeskCollector extends SketchCollector {

    static CONFIG = {
        id: "order_desk",
        name: "Order Desk",
        description: "i18n.collectors.order_desk.description",
        version: "0",
        website: "https://app.orderdesk.me/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66075.jpg",
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
        loginUrl: "https://app.orderdesk.me/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrderDeskCollector.CONFIG);
    }
}
