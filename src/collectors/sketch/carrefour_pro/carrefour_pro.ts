
import { SketchCollector } from '../../sketchCollector';

export class CarrefourProCollector extends SketchCollector {

    static CONFIG = {
        id: "carrefour_pro",
        name: "Carrefour Pro",
        description: "i18n.collectors.carrefour_pro.description",
        version: "0",
        website: "https://www.contrat.pro.carrefour.fr/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1082095.jpg",
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
        entryUrl: "https://www.contrat.pro.carrefour.fr/purchases",
    }

    constructor() {
        super(CarrefourProCollector.CONFIG);
    }
}
