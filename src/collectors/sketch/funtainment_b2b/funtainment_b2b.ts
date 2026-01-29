
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FuntainmentB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "funtainment_b2b",
        name: "Funtainment B2B",
        description: "i18n.collectors.funtainment_b2b.description",
        version: "0",
        website: "https://funtainment-b2b.de/index.php?ID=18",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1416082.jpg",
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
        loginUrl: "https://funtainment-b2b.de/index.php?ID=18",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FuntainmentB2bCollector.CONFIG);
    }
}
