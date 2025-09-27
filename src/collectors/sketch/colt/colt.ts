
import { SketchCollector } from '../../sketchCollector';

export class ColtCollector extends SketchCollector {

    static CONFIG = {
        id: "colt",
        name: "colt",
        description: "i18n.collectors.colt.description",
        version: "0",
        website: "https://dcp.colt.net/myBillsView/viewInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32872.jpg",
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
        entryUrl: "https://dcp.colt.net/myBillsView/viewInvoices",
    }

    constructor() {
        super(ColtCollector.CONFIG);
    }
}
