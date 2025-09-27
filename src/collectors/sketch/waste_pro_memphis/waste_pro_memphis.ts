
import { SketchCollector } from '../../sketchCollector';

export class WasteProMemphisCollector extends SketchCollector {

    static CONFIG = {
        id: "waste_pro_memphis",
        name: "Waste Pro - Memphis",
        description: "i18n.collectors.waste_pro_memphis.description",
        version: "0",
        website: "https://etower.wasteprousa.com/T7Memphis/ViewInvoices.aspx?history=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732583.jpg",
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
        entryUrl: "https://etower.wasteprousa.com/T7Memphis/ViewInvoices.aspx?history=1",
    }

    constructor() {
        super(WasteProMemphisCollector.CONFIG);
    }
}
