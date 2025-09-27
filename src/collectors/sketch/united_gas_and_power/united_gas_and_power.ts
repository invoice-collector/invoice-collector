
import { SketchCollector } from '../../sketchCollector';

export class UnitedGasAndPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "united_gas_and_power",
        name: "United Gas & Power",
        description: "i18n.collectors.united_gas_and_power.description",
        version: "0",
        website: "https://customer.ugp.co.uk/#/myBills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503855.jpg",
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
        entryUrl: "https://customer.ugp.co.uk/#/myBills",
    }

    constructor() {
        super(UnitedGasAndPowerCollector.CONFIG);
    }
}
