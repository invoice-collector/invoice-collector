
import { SketchCollector } from '../../sketchCollector';

export class BilligerDeCollector extends SketchCollector {

    static CONFIG = {
        id: "billiger_de",
        name: "billiger.de",
        description: "i18n.collectors.billiger_de.description",
        version: "0",
        website: "https://partner.billiger.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8191.jpg",
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
        entryUrl: "https://partner.billiger.de",
    }

    constructor() {
        super(BilligerDeCollector.CONFIG);
    }
}
