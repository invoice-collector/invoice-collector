
import { SketchCollector } from '../../sketchCollector';

export class MyjobquoteCollector extends SketchCollector {

    static CONFIG = {
        id: "myjobquote",
        name: "MyJobQuote",
        description: "i18n.collectors.myjobquote.description",
        version: "0",
        website: "https://www.myjobquote.co.uk/my-account/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284749.jpg",
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
        entryUrl: "https://www.myjobquote.co.uk/my-account/billing/invoices",
    }

    constructor() {
        super(MyjobquoteCollector.CONFIG);
    }
}
