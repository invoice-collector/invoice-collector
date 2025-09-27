
import { SketchCollector } from '../../sketchCollector';

export class ChatterbugCollector extends SketchCollector {

    static CONFIG = {
        id: "chatterbug",
        name: "ChatterBug",
        description: "i18n.collectors.chatterbug.description",
        version: "0",
        website: "https://app.chatterbug.com/payments/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409820.jpg",
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
        entryUrl: "https://app.chatterbug.com/payments/invoices",
    }

    constructor() {
        super(ChatterbugCollector.CONFIG);
    }
}
