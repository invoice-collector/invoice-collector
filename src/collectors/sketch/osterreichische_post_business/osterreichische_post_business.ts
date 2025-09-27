
import { SketchCollector } from '../../sketchCollector';

export class OsterreichischePostBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "osterreichische_post_business",
        name: "Osterreichische Post Business",
        description: "i18n.collectors.osterreichische_post_business.description",
        version: "0",
        website: "https://bec.post.at/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/522387.jpg",
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
        entryUrl: "https://bec.post.at/invoices",
    }

    constructor() {
        super(OsterreichischePostBusinessCollector.CONFIG);
    }
}
