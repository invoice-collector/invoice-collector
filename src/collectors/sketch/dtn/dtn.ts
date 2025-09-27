
import { SketchCollector } from '../../sketchCollector';

export class DtnCollector extends SketchCollector {

    static CONFIG = {
        id: "dtn",
        name: "DTN",
        description: "i18n.collectors.dtn.description",
        version: "0",
        website: "https://online.dtn.com/online/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47499.jpg",
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
        entryUrl: "https://online.dtn.com/online/",
    }

    constructor() {
        super(DtnCollector.CONFIG);
    }
}
