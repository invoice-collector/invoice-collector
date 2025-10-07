
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Digistore24Collector extends SketchCollector {

    static CONFIG = {
        id: "digistore24",
        name: "Digistore24",
        description: "i18n.collectors.digistore24.description",
        version: "0",
        website: "https://www.digistore24.com/de/reports/payouts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7377.jpg",
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
        entryUrl: "https://www.digistore24.com/de/reports/payouts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Digistore24Collector.CONFIG);
    }
}
