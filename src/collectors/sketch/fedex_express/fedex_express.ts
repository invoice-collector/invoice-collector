
import { SketchCollector } from '../../sketchCollector';

export class FedexExpressCollector extends SketchCollector {

    static CONFIG = {
        id: "fedex_express",
        name: "FEDEX EXPRESS",
        description: "i18n.collectors.fedex_express.description",
        version: "0",
        website: "https://www.fedex.com/secure-login/en-ph/#/login-credentials",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040937.jpg",
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
        entryUrl: "https://www.fedex.com/secure-login/en-ph/#/login-credentials",
    }

    constructor() {
        super(FedexExpressCollector.CONFIG);
    }
}
