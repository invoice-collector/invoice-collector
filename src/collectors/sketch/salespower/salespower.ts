
import { SketchCollector } from '../../sketchCollector';

export class SalespowerCollector extends SketchCollector {

    static CONFIG = {
        id: "salespower",
        name: "Salespower",
        description: "i18n.collectors.salespower.description",
        version: "0",
        website: "https://app2.salespower.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180695.jpg",
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
        entryUrl: "https://app2.salespower.io",
    }

    constructor() {
        super(SalespowerCollector.CONFIG);
    }
}
