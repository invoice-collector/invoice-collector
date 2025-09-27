
import { SketchCollector } from '../../sketchCollector';

export class MyAutobidDeCollector extends SketchCollector {

    static CONFIG = {
        id: "my_autobid_de",
        name: "my.autobid.de",
        description: "i18n.collectors.my_autobid_de.description",
        version: "0",
        website: "https://my.autobid.de/?action=mailbox&actionPath=mailbox/invoices&portal=all",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1679588.jpg",
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
        entryUrl: "https://my.autobid.de/?action=mailbox&actionPath=mailbox/invoices&portal=all",
    }

    constructor() {
        super(MyAutobidDeCollector.CONFIG);
    }
}
