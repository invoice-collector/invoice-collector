
import { SketchCollector } from '../../sketchCollector';

export class BusinessBikeCollector extends SketchCollector {

    static CONFIG = {
        id: "business_bike",
        name: "Business Bike",
        description: "i18n.collectors.business_bike.description",
        version: "0",
        website: "https://portal.businessbike.de/anmeldung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1577627.jpg",
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
        entryUrl: "https://portal.businessbike.de/anmeldung",
    }

    constructor() {
        super(BusinessBikeCollector.CONFIG);
    }
}
