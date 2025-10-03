
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RaskCollector extends SketchCollector {

    static CONFIG = {
        id: "rask",
        name: "Rask",
        description: "i18n.collectors.rask.description",
        version: "0",
        website: "https://app.rask.ai",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4195635.jpg",
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
        entryUrl: "https://app.rask.ai",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RaskCollector.CONFIG);
    }
}
