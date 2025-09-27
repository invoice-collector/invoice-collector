
import { SketchCollector } from '../../sketchCollector';

export class EnterpriseRentACarCollector extends SketchCollector {

    static CONFIG = {
        id: "enterprise_rent_a_car",
        name: "ENTERPRISE - Rent-a-car",
        description: "i18n.collectors.enterprise_rent_a_car.description",
        version: "0",
        website: "https://resolution.ehi.com/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510989.jpg",
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
        entryUrl: "https://resolution.ehi.com/#/",
    }

    constructor() {
        super(EnterpriseRentACarCollector.CONFIG);
    }
}
