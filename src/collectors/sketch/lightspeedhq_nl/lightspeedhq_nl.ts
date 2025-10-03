
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LightspeedhqNlCollector extends SketchCollector {

    static CONFIG = {
        id: "lightspeedhq_nl",
        name: "lightspeedhq.nl",
        description: "i18n.collectors.lightspeedhq_nl.description",
        version: "0",
        website: "https://www.lightspeedhq.nl/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20477.jpg",
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
        entryUrl: "https://www.lightspeedhq.nl/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LightspeedhqNlCollector.CONFIG);
    }
}
