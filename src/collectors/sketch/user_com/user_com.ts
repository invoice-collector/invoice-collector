
import { SketchCollector } from '../../sketchCollector';

export class UserComCollector extends SketchCollector {

    static CONFIG = {
        id: "user_com",
        name: "User.com",
        description: "i18n.collectors.user_com.description",
        version: "0",
        website: "https://app.user.com/payments/euiS8D/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778136.jpg",
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
        entryUrl: "https://app.user.com/payments/euiS8D/invoices/",
    }

    constructor() {
        super(UserComCollector.CONFIG);
    }
}
