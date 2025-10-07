
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KalenderDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "kalender_digital",
        name: "Kalender.digital",
        description: "i18n.collectors.kalender_digital.description",
        version: "0",
        website: "https://settings.kalender.digital/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3020653.jpg",
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
        entryUrl: "https://settings.kalender.digital/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KalenderDigitalCollector.CONFIG);
    }
}
