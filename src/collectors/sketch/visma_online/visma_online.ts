
import { SketchCollector } from '../../sketchCollector';

export class VismaOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "visma_online",
        name: "Visma Online",
        description: "i18n.collectors.visma_online.description",
        version: "0",
        website: "https://www.vismaonline.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3273830.jpg",
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
        entryUrl: "https://www.vismaonline.com/invoices",
    }

    constructor() {
        super(VismaOnlineCollector.CONFIG);
    }
}
