
import { SketchCollector } from '../../sketchCollector';

export class FatdropCollector extends SketchCollector {

    static CONFIG = {
        id: "fatdrop",
        name: "Fatdrop",
        description: "i18n.collectors.fatdrop.description",
        version: "0",
        website: "https://www.fatdrop.co.uk/myaccount/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4569025.jpg",
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
        entryUrl: "https://www.fatdrop.co.uk/myaccount/invoices",
    }

    constructor() {
        super(FatdropCollector.CONFIG);
    }
}
