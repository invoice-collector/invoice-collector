
import { SketchCollector } from '../../sketchCollector';

export class CapsFuelCardsCollector extends SketchCollector {

    static CONFIG = {
        id: "caps_fuel_cards",
        name: "CAPS Fuel Cards",
        description: "i18n.collectors.caps_fuel_cards.description",
        version: "0",
        website: "https://login.petrolweb.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035423.jpg",
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
        entryUrl: "https://login.petrolweb.net",
    }

    constructor() {
        super(CapsFuelCardsCollector.CONFIG);
    }
}
