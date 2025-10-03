
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SurferLocalCollector extends SketchCollector {

    static CONFIG = {
        id: "surfer_local",
        name: "Surfer Local",
        description: "i18n.collectors.surfer_local.description",
        version: "0",
        website: "https://app.surferlocal.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1101224.jpg",
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
        entryUrl: "https://app.surferlocal.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SurferLocalCollector.CONFIG);
    }
}
