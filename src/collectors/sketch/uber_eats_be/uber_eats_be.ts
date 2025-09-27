
import { SketchCollector } from '../../sketchCollector';

export class UberEatsBeCollector extends SketchCollector {

    static CONFIG = {
        id: "uber_eats_be",
        name: "Uber Eats BE",
        description: "i18n.collectors.uber_eats_be.description",
        version: "0",
        website: "https://www.ubereats.com/be/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2658868.jpg",
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
        entryUrl: "https://www.ubereats.com/be/orders",
    }

    constructor() {
        super(UberEatsBeCollector.CONFIG);
    }
}
