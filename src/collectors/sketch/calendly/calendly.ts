
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CalendlyCollector extends SketchCollector {

    static CONFIG = {
        id: "calendly",
        name: "Calendly",
        description: "i18n.collectors.calendly.description",
        version: "0",
        website: "https://calendly.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7522.jpg",
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
        entryUrl: "https://calendly.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CalendlyCollector.CONFIG);
    }
}
