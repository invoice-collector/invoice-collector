
import { SketchCollector } from '../../sketchCollector';

export class ReadwiseCollector extends SketchCollector {

    static CONFIG = {
        id: "readwise",
        name: "Readwise",
        description: "i18n.collectors.readwise.description",
        version: "0",
        website: "https://readwise.io/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/781222.jpg",
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
        entryUrl: "https://readwise.io/receipts",
    }

    constructor() {
        super(ReadwiseCollector.CONFIG);
    }
}
