
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Sketch2Collector extends SketchCollector {

    static CONFIG = {
        id: "sketch",
        name: "Sketch",
        description: "i18n.collectors.sketch.description",
        version: "0",
        website: "https://www.sketch.com/documents/all-documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/240044.jpg",
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
        loginUrl: "https://www.sketch.com/documents/all-documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Sketch2Collector.CONFIG);
    }
}
