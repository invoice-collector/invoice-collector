
import { SketchCollector } from '../../sketchCollector';

export class CouponCarrierCollector extends SketchCollector {

    static CONFIG = {
        id: "coupon_carrier",
        name: "Coupon Carrier",
        description: "i18n.collectors.coupon_carrier.description",
        version: "0",
        website: "https://app.couponcarrier.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49702.jpg",
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
        entryUrl: "https://app.couponcarrier.io/login",
    }

    constructor() {
        super(CouponCarrierCollector.CONFIG);
    }
}
