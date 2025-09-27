
import { SketchCollector } from '../../sketchCollector';

export class GeorgiaNaturalGasCollector extends SketchCollector {

    static CONFIG = {
        id: "georgia_natural_gas",
        name: "Georgia Natural Gas",
        description: "i18n.collectors.georgia_natural_gas.description",
        version: "0",
        website: "https://myaccount.gng.com/BillHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/240021.jpg",
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
        entryUrl: "https://myaccount.gng.com/BillHistory",
    }

    constructor() {
        super(GeorgiaNaturalGasCollector.CONFIG);
    }
}
