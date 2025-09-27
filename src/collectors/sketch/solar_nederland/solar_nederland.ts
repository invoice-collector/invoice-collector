
import { SketchCollector } from '../../sketchCollector';

export class SolarNederlandCollector extends SketchCollector {

    static CONFIG = {
        id: "solar_nederland",
        name: "Solar Nederland",
        description: "i18n.collectors.solar_nederland.description",
        version: "0",
        website: "https://webshop.solarnederland.nl/signon?ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32852.jpg",
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
        entryUrl: "https://webshop.solarnederland.nl/signon?ReturnUrl=%2f",
    }

    constructor() {
        super(SolarNederlandCollector.CONFIG);
    }
}
