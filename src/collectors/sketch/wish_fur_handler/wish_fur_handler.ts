
import { SketchCollector } from '../../sketchCollector';

export class WishFurHandlerCollector extends SketchCollector {

    static CONFIG = {
        id: "wish_fur_handler",
        name: "wish fur Handler",
        description: "i18n.collectors.wish_fur_handler.description",
        version: "0",
        website: "https://merchant.wish.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60382.jpg",
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
        entryUrl: "https://merchant.wish.com",
    }

    constructor() {
        super(WishFurHandlerCollector.CONFIG);
    }
}
