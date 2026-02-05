
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Messteam2000Collector extends SketchCollector {

    static CONFIG = {
        id: "messteam_2000",
        name: "Messteam 2000",
        description: "i18n.collectors.messteam_2000.description",
        version: "0",
        website: "https://mt2000.prohka-cloud.de/objects",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367862.jpg",
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
        loginUrl: "https://mt2000.prohka-cloud.de/objects",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Messteam2000Collector.CONFIG);
    }
}
