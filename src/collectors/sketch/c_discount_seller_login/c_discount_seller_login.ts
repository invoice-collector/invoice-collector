
import { SketchCollector } from '../../sketchCollector';

export class CDiscountSellerLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "c_discount_seller_login",
        name: "C Discount - Seller Login",
        description: "i18n.collectors.c_discount_seller_login.description",
        version: "0",
        website: "https://seller.cdiscount.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23539.jpg",
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
        entryUrl: "https://seller.cdiscount.com/login",
    }

    constructor() {
        super(CDiscountSellerLoginCollector.CONFIG);
    }
}
