
import { SketchCollector } from '../../sketchCollector';

export class PrerenderIoCollector extends SketchCollector {

    static CONFIG = {
        id: "prerender_io",
        name: "Prerender.io",
        description: "i18n.collectors.prerender_io.description",
        version: "0",
        website: "https://prerender.io/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57615.jpg",
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
        entryUrl: "https://prerender.io/account/invoices",
    }

    constructor() {
        super(PrerenderIoCollector.CONFIG);
    }
}
