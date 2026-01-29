
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CompassminingIoCollector extends SketchCollector {

    static CONFIG = {
        id: "compassmining_io",
        name: "Compassmining.io",
        description: "i18n.collectors.compassmining_io.description",
        version: "0",
        website: "https://compassmining.io/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3312520.jpg",
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
        loginUrl: "https://compassmining.io/profile",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CompassminingIoCollector.CONFIG);
    }
}
