
import { SketchCollector } from '../../sketchCollector';

export class Tool4sellerCollector extends SketchCollector {

    static CONFIG = {
        id: "tool4seller",
        name: "tool4seller",
        description: "i18n.collectors.tool4seller.description",
        version: "0",
        website: "https://data.tool4seller.com/dashboard/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3339762.jpg",
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
        entryUrl: "https://data.tool4seller.com/dashboard/home",
    }

    constructor() {
        super(Tool4sellerCollector.CONFIG);
    }
}
