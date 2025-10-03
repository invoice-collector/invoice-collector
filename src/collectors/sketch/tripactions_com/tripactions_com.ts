
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TripactionsComCollector extends SketchCollector {

    static CONFIG = {
        id: "tripactions_com",
        name: "tripactions.com",
        description: "i18n.collectors.tripactions_com.description",
        version: "0",
        website: "https://app.tripactions.com/app/admin2/de/reports/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488421.jpg",
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
        entryUrl: "https://app.tripactions.com/app/admin2/de/reports/overview",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TripactionsComCollector.CONFIG);
    }
}
