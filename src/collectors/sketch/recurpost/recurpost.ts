
import { SketchCollector } from '../../sketchCollector';

export class RecurpostCollector extends SketchCollector {

    static CONFIG = {
        id: "recurpost",
        name: "Recurpost",
        description: "i18n.collectors.recurpost.description",
        version: "0",
        website: "https://sites.fastspring.com/recurpost/order/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210276.jpg",
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
        entryUrl: "https://sites.fastspring.com/recurpost/order/invoice/",
    }

    constructor() {
        super(RecurpostCollector.CONFIG);
    }
}
