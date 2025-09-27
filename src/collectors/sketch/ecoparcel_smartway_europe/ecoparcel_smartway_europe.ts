
import { SketchCollector } from '../../sketchCollector';

export class EcoparcelSmartwayEuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "ecoparcel_smartway_europe",
        name: "Ecoparcel Smartway Europe",
        description: "i18n.collectors.ecoparcel_smartway_europe.description",
        version: "0",
        website: "https://www.ecoparcel.eu/de/order/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4024571.jpg",
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
        entryUrl: "https://www.ecoparcel.eu/de/order/invoice/",
    }

    constructor() {
        super(EcoparcelSmartwayEuropeCollector.CONFIG);
    }
}
