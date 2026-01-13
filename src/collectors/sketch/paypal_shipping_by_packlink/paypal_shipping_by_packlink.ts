
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PaypalShippingByPacklinkCollector extends SketchCollector {

    static CONFIG = {
        id: "paypal_shipping_by_packlink",
        name: "Paypal Shipping by Packlink",
        description: "i18n.collectors.paypal_shipping_by_packlink.description",
        version: "0",
        website: "https://paypal.packlink.com/de/private/settings/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4420932.jpg",
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
        loginUrl: "https://paypal.packlink.com/de/private/settings/billing/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PaypalShippingByPacklinkCollector.CONFIG);
    }
}
