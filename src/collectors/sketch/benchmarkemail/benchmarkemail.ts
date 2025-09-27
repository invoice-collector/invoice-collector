
import { SketchCollector } from '../../sketchCollector';

export class BenchmarkemailCollector extends SketchCollector {

    static CONFIG = {
        id: "benchmarkemail",
        name: "benchmarkemail",
        description: "i18n.collectors.benchmarkemail.description",
        version: "0",
        website: "https://ui.benchmarkemail.com/BillingHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953810.jpg",
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
        entryUrl: "https://ui.benchmarkemail.com/BillingHistory",
    }

    constructor() {
        super(BenchmarkemailCollector.CONFIG);
    }
}
