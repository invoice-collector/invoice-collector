
import { SketchCollector } from '../../sketchCollector';

export class SolarMonkeyCollector extends SketchCollector {

    static CONFIG = {
        id: "solar_monkey",
        name: "Solar Monkey",
        description: "i18n.collectors.solar_monkey.description",
        version: "0",
        website: "https://solar-monkey.chargebee.com/portal/v2/billing_history?source=home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181313.jpg",
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
        entryUrl: "https://solar-monkey.chargebee.com/portal/v2/billing_history?source=home",
    }

    constructor() {
        super(SolarMonkeyCollector.CONFIG);
    }
}
