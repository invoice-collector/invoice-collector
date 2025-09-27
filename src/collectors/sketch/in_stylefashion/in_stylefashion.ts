
import { SketchCollector } from '../../sketchCollector';

export class InStylefashionCollector extends SketchCollector {

    static CONFIG = {
        id: "in_stylefashion",
        name: "In-stylefashion",
        description: "i18n.collectors.in_stylefashion.description",
        version: "0",
        website: "https://www.in-stylefashion.de/customer/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120872.jpg",
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
        entryUrl: "https://www.in-stylefashion.de/customer/account/",
    }

    constructor() {
        super(InStylefashionCollector.CONFIG);
    }
}
