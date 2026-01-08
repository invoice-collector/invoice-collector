
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FleetrunnrCollector extends SketchCollector {

    static CONFIG = {
        id: "fleetrunnr",
        name: "FleetRunnr",
        description: "i18n.collectors.fleetrunnr.description",
        version: "0",
        website: "https://fleetrunnr.app/get-started",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3111284.jpg",
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
        loginUrl: "https://fleetrunnr.app/get-started",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FleetrunnrCollector.CONFIG);
    }
}
