
import { SketchCollector } from '../../sketchCollector';

export class BigrockCollector extends SketchCollector {

    static CONFIG = {
        id: "bigrock_com",
        name: "Bigrock (.com)",
        description: "i18n.collectors.bigrock_com.description",
        version: "0",
        website: "https://manage.bigrock.com/servlet/ListCustomerTransactionsServlet",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2193910.jpg",
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
        entryUrl: "https://manage.bigrock.com/servlet/ListCustomerTransactionsServlet",
    }

    constructor() {
        super(BigrockCollector.CONFIG);
    }
}
