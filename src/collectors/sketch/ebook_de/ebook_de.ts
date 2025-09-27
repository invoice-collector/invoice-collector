
import { SketchCollector } from '../../sketchCollector';

export class EbookDeCollector extends SketchCollector {

    static CONFIG = {
        id: "ebook_de",
        name: "eBook.de",
        description: "i18n.collectors.ebook_de.description",
        version: "0",
        website: "https://www.ebook.de/de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67621.jpg",
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
        entryUrl: "https://www.ebook.de/de/account/login",
    }

    constructor() {
        super(EbookDeCollector.CONFIG);
    }
}
