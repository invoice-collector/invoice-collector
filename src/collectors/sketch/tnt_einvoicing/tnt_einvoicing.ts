
import { SketchCollector } from '../../sketchCollector';

export class TntEinvoicingCollector extends SketchCollector {

    static CONFIG = {
        id: "tnt_einvoicing",
        name: "TNT - eInvoicing",
        description: "i18n.collectors.tnt_einvoicing.description",
        version: "0",
        website: "https://express.tnt.com/eInvoicing/default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/522381.jpg",
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
        entryUrl: "https://express.tnt.com/eInvoicing/default.aspx",
    }

    constructor() {
        super(TntEinvoicingCollector.CONFIG);
    }
}
