
import { SketchCollector } from '../../sketchCollector';

export class CaDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "ca_digital",
        name: "CA Digital",
        description: "i18n.collectors.ca_digital.description",
        version: "0",
        website: "https://order.ca-digit.com/cat/customer/address/?___store=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445902.jpg",
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
        entryUrl: "https://order.ca-digit.com/cat/customer/address/?___store=en",
    }

    constructor() {
        super(CaDigitalCollector.CONFIG);
    }
}
