
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GroverBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "grover_business",
        name: "grover business",
        description: "i18n.collectors.grover_business.description",
        version: "0",
        website: "https://www.grover.com/business/your-payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1172646.jpg",
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
        entryUrl: "https://www.grover.com/business/your-payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GroverBusinessCollector.CONFIG);
    }
}
