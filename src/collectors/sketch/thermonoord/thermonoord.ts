
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ThermonoordCollector extends SketchCollector {

    static CONFIG = {
        id: "thermonoord",
        name: "Thermonoord",
        description: "i18n.collectors.thermonoord.description",
        version: "0",
        website: "https://web.thermonoord.nl/B2B/PAGE_Start/7A8AANwHRfNPZGdZZmJvRkdkQwA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32249.jpg",
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
        entryUrl: "https://web.thermonoord.nl/B2B/PAGE_Start/7A8AANwHRfNPZGdZZmJvRkdkQwA",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThermonoordCollector.CONFIG);
    }
}
