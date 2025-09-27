
import { SketchCollector } from '../../sketchCollector';

export class DirectEnergyAlbertaCustomerLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "direct_energy_alberta_customer_login",
        name: "Direct Energy - Alberta Customer Login",
        description: "i18n.collectors.direct_energy_alberta_customer_login.description",
        version: "0",
        website: "https://oam.directenergyregulatedservices.com/home/login.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121686.jpg",
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
        entryUrl: "https://oam.directenergyregulatedservices.com/home/login.xhtml",
    }

    constructor() {
        super(DirectEnergyAlbertaCustomerLoginCollector.CONFIG);
    }
}
