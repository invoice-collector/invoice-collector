
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwissAirlineCollector extends SketchCollector {

    static CONFIG = {
        id: "swiss_airline",
        name: "Swiss (Airline)",
        description: "i18n.collectors.swiss_airline.description",
        version: "0",
        website: "https://www.swissair.com/de/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534363.jpg",
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
        entryUrl: "https://www.swissair.com/de/de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwissAirlineCollector.CONFIG);
    }
}
