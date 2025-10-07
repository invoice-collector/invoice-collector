
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OrderSmartCollector extends SketchCollector {

    static CONFIG = {
        id: "order_smart",
        name: "order smart",
        description: "i18n.collectors.order_smart.description",
        version: "0",
        website: "https://delivery-app.app-smart.services/cloudlogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/798207.jpg",
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
        entryUrl: "https://delivery-app.app-smart.services/cloudlogin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrderSmartCollector.CONFIG);
    }
}
