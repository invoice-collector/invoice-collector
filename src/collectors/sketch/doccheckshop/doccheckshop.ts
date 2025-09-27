
import { SketchCollector } from '../../sketchCollector';

export class DoccheckshopCollector extends SketchCollector {

    static CONFIG = {
        id: "doccheckshop",
        name: "DocCheckShop",
        description: "i18n.collectors.doccheckshop.description",
        version: "0",
        website: "https://www.doccheckshop.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46341.jpg",
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
        entryUrl: "https://www.doccheckshop.de",
    }

    constructor() {
        super(DoccheckshopCollector.CONFIG);
    }
}
