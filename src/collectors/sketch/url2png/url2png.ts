
import { SketchCollector } from '../../sketchCollector';

export class Url2pngCollector extends SketchCollector {

    static CONFIG = {
        id: "url2png",
        name: "URL2PNG",
        description: "i18n.collectors.url2png.description",
        version: "0",
        website: "https://www.url2png.com/dashboard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57370.jpg",
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
        entryUrl: "https://www.url2png.com/dashboard/invoices",
    }

    constructor() {
        super(Url2pngCollector.CONFIG);
    }
}
