
import { SketchCollector } from '../../sketchCollector';

export class CocaColaEuropeanPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "coca_cola_european_partners",
        name: "Coca-Cola European Partners",
        description: "i18n.collectors.coca_cola_european_partners.description",
        version: "0",
        website: "https://my.ccep.com/login#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/937756.jpg",
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
        entryUrl: "https://my.ccep.com/login#login",
    }

    constructor() {
        super(CocaColaEuropeanPartnersCollector.CONFIG);
    }
}
