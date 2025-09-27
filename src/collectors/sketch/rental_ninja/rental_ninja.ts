
import { SketchCollector } from '../../sketchCollector';

export class RentalNinjaCollector extends SketchCollector {

    static CONFIG = {
        id: "rental_ninja",
        name: "Rental Ninja",
        description: "i18n.collectors.rental_ninja.description",
        version: "0",
        website: "https://rental-ninja.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1188403.jpg",
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
        entryUrl: "https://rental-ninja.com/login",
    }

    constructor() {
        super(RentalNinjaCollector.CONFIG);
    }
}
