
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AirgasCollector extends SketchCollector {

    static CONFIG = {
        id: "airgas",
        name: "Airgas",
        description: "i18n.collectors.airgas.description",
        version: "0",
        website: "https://www.airgas.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4546680.jpg",
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
        entryUrl: "https://www.airgas.com/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirgasCollector.CONFIG);
    }
}
