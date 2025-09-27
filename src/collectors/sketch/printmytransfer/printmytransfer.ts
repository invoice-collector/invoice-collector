
import { SketchCollector } from '../../sketchCollector';

export class PrintmytransferCollector extends SketchCollector {

    static CONFIG = {
        id: "printmytransfer",
        name: "PrintMyTransfer",
        description: "i18n.collectors.printmytransfer.description",
        version: "0",
        website: "https://extranet.printmytransfer.de/secure/my-invoices.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778813.jpg",
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
        entryUrl: "https://extranet.printmytransfer.de/secure/my-invoices.xhtml",
    }

    constructor() {
        super(PrintmytransferCollector.CONFIG);
    }
}
