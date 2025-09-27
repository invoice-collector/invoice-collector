
import { SketchCollector } from '../../sketchCollector';

export class StawagLadecloudCollector extends SketchCollector {

    static CONFIG = {
        id: "stawag_ladecloud",
        name: "Stawag Ladecloud",
        description: "i18n.collectors.stawag_ladecloud.description",
        version: "0",
        website: "https://stawag.ladecloud.de/account-type/customer/view/payment-documents/tab/invoice-transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445825.jpg",
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
        entryUrl: "https://stawag.ladecloud.de/account-type/customer/view/payment-documents/tab/invoice-transactions",
    }

    constructor() {
        super(StawagLadecloudCollector.CONFIG);
    }
}
