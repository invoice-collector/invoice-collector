
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BigrockCollector extends SketchCollector {

    static CONFIG = {
        id: "bigrock_com",
        name: "Bigrock (.com)",
        description: "i18n.collectors.bigrock_com.description",
        version: "0",
        website: "https://manage.bigrock.com/servlet/ListCustomerTransactionsServlet",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2193910.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://manage.bigrock.com/servlet/ListCustomerTransactionsServlet",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BigrockCollector.CONFIG);
    }
}
