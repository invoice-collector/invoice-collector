
import { SketchCollector } from '../../sketchCollector';

export class PaperformCollector extends SketchCollector {

    static CONFIG = {
        id: "paperform",
        name: "Paperform",
        description: "i18n.collectors.paperform.description",
        version: "0",
        website: "https://paperform.co/account/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/387990.jpg",
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
        entryUrl: "https://paperform.co/account/receipts",
    }

    constructor() {
        super(PaperformCollector.CONFIG);
    }
}
