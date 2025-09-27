
import { SketchCollector } from '../../sketchCollector';

export class MadisonGasAndElectricCollector extends SketchCollector {

    static CONFIG = {
        id: "madison_gas_and_electric",
        name: "Madison Gas and Electric",
        description: "i18n.collectors.madison_gas_and_electric.description",
        version: "0",
        website: "https://www.mge.com/my_mge/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8962.jpg",
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
        entryUrl: "https://www.mge.com/my_mge/",
    }

    constructor() {
        super(MadisonGasAndElectricCollector.CONFIG);
    }
}
