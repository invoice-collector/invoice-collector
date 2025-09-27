
import { SketchCollector } from '../../sketchCollector';

export class PractitestCollector extends SketchCollector {

    static CONFIG = {
        id: "practitest",
        name: "Practitest",
        description: "i18n.collectors.practitest.description",
        version: "0",
        website: "https://prod.practitest.com/accounts/7226/payment_details/12360",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391882.jpg",
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
        entryUrl: "https://prod.practitest.com/accounts/7226/payment_details/12360",
    }

    constructor() {
        super(PractitestCollector.CONFIG);
    }
}
