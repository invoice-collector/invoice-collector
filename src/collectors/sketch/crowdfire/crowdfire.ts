
import { SketchCollector } from '../../sketchCollector';

export class CrowdfireCollector extends SketchCollector {

    static CONFIG = {
        id: "crowdfire",
        name: "Crowdfire",
        description: "i18n.collectors.crowdfire.description",
        version: "0",
        website: "https://web.crowdfireapp.com/#/grow/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9888.jpg",
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
        entryUrl: "https://web.crowdfireapp.com/#/grow/receipts",
    }

    constructor() {
        super(CrowdfireCollector.CONFIG);
    }
}
