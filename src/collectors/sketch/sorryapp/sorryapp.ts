
import { SketchCollector } from '../../sketchCollector';

export class SorryappCollector extends SketchCollector {

    static CONFIG = {
        id: "sorryapp",
        name: "SorryApp",
        description: "i18n.collectors.sorryapp.description",
        version: "0",
        website: "https://app.sorryapp.com/billing/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211116.jpg",
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
        entryUrl: "https://app.sorryapp.com/billing/subscription",
    }

    constructor() {
        super(SorryappCollector.CONFIG);
    }
}
