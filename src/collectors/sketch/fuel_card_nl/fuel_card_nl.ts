
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FuelCardNlCollector extends SketchCollector {

    static CONFIG = {
        id: "fuel_card_nl",
        name: "Fuel-Card.nl",
        description: "i18n.collectors.fuel_card_nl.description",
        version: "0",
        website: "https://mijn.fuel-card.nl/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1487568.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://mijn.fuel-card.nl/Login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FuelCardNlCollector.CONFIG);
    }
}
