
import { SketchCollector } from '../../sketchCollector';

export class BestsecretCollector extends SketchCollector {

    static CONFIG = {
        id: "bestsecret",
        name: "BestSecret",
        description: "i18n.collectors.bestsecret.description",
        version: "0",
        website: "https://www.bestsecret.com/orders.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4230537.jpg",
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
        entryUrl: "https://www.bestsecret.com/orders.htm",
    }

    constructor() {
        super(BestsecretCollector.CONFIG);
    }
}
