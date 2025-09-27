
import { SketchCollector } from '../../sketchCollector';

export class CasellaWasteCollector extends SketchCollector {

    static CONFIG = {
        id: "casella_waste",
        name: "Casella Waste",
        description: "i18n.collectors.casella_waste.description",
        version: "0",
        website: "http://www.casella.com/billpay",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87699.jpg",
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
        entryUrl: "http://www.casella.com/billpay",
    }

    constructor() {
        super(CasellaWasteCollector.CONFIG);
    }
}
