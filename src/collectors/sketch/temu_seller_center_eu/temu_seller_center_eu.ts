
import { SketchCollector } from '../../sketchCollector';

export class TemuSellerCenterEuCollector extends SketchCollector {

    static CONFIG = {
        id: "temu_seller_center_eu",
        name: "Temu Seller Center EU",
        description: "i18n.collectors.temu_seller_center_eu.description",
        version: "0",
        website: "https://seller-eu.temu.com/login.html?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4336059.jpg",
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
        entryUrl: "https://seller-eu.temu.com/login.html?",
    }

    constructor() {
        super(TemuSellerCenterEuCollector.CONFIG);
    }
}
