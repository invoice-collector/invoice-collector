
import { SketchCollector } from '../../sketchCollector';

export class SerpapiCollector extends SketchCollector {

    static CONFIG = {
        id: "serpapi",
        name: "SerpAPI",
        description: "i18n.collectors.serpapi.description",
        version: "0",
        website: "https://serpapi.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203791.jpg",
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
        entryUrl: "https://serpapi.com/invoices",
    }

    constructor() {
        super(SerpapiCollector.CONFIG);
    }
}
