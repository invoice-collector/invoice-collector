
import { SketchCollector } from '../../sketchCollector';

export class RentabloCollector extends SketchCollector {

    static CONFIG = {
        id: "rentablo",
        name: "Rentablo",
        description: "i18n.collectors.rentablo.description",
        version: "0",
        website: "https://rentablo.de/app#!/cashbackSubscriptionDashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223722.jpg",
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
        entryUrl: "https://rentablo.de/app#!/cashbackSubscriptionDashboard",
    }

    constructor() {
        super(RentabloCollector.CONFIG);
    }
}
