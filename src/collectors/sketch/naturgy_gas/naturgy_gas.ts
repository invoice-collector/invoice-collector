
import { SketchCollector } from '../../sketchCollector';

export class NaturgyGasCollector extends SketchCollector {

    static CONFIG = {
        id: "naturgy_gas",
        name: "Naturgy Gas",
        description: "i18n.collectors.naturgy_gas.description",
        version: "0",
        website: "https://areaprivada.naturgy.es/ovh-web/SearchInvoiceAndConsumptionList.gas",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128491.jpg",
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
        entryUrl: "https://areaprivada.naturgy.es/ovh-web/SearchInvoiceAndConsumptionList.gas",
    }

    constructor() {
        super(NaturgyGasCollector.CONFIG);
    }
}
