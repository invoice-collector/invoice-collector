
import { SketchCollector } from '../../sketchCollector';

export class EvermotionCollector extends SketchCollector {

    static CONFIG = {
        id: "evermotion",
        name: "Evermotion",
        description: "i18n.collectors.evermotion.description",
        version: "0",
        website: "https://evermotion.org/shop/my_orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233039.jpg",
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
        entryUrl: "https://evermotion.org/shop/my_orders",
    }

    constructor() {
        super(EvermotionCollector.CONFIG);
    }
}
