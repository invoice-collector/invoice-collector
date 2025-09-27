
import { SketchCollector } from '../../sketchCollector';

export class LambdatestCollector extends SketchCollector {

    static CONFIG = {
        id: "lambdatest",
        name: "LambdaTest",
        description: "i18n.collectors.lambdatest.description",
        version: "0",
        website: "https://billing.lambdatest.com/billing/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1240130.jpg",
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
        entryUrl: "https://billing.lambdatest.com/billing/subscriptions",
    }

    constructor() {
        super(LambdatestCollector.CONFIG);
    }
}
