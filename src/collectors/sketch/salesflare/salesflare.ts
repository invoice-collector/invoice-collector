
import { SketchCollector } from '../../sketchCollector';

export class SalesflareCollector extends SketchCollector {

    static CONFIG = {
        id: "salesflare",
        name: "Salesflare",
        description: "i18n.collectors.salesflare.description",
        version: "0",
        website: "https://salesflare.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159859.jpg",
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
        entryUrl: "https://salesflare.com/",
    }

    constructor() {
        super(SalesflareCollector.CONFIG);
    }
}
