
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _2checkoutCollector extends SketchCollector {

    static CONFIG = {
        id: "2checkout",
        name: "2CHECKOUT",
        description: "i18n.collectors.2checkout.description",
        version: "0",
        website: "https://secure.2co.com/myaccount/view_order/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10098.jpg",
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
        entryUrl: "https://secure.2co.com/myaccount/view_order/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_2checkoutCollector.CONFIG);
    }
}
