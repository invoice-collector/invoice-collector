
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FuelGenieCollector extends SketchCollector {

    static CONFIG = {
        id: "fuel_genie",
        name: "Fuel Genie",
        description: "i18n.collectors.fuel_genie.description",
        version: "0",
        website: "https://mma.fuelgenie.co.uk/secure/login.aspx?hideApply=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408106.jpg",
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
        entryUrl: "https://mma.fuelgenie.co.uk/secure/login.aspx?hideApply=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FuelGenieCollector.CONFIG);
    }
}
