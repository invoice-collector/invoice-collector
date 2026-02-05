
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PitchCollector extends SketchCollector {

    static CONFIG = {
        id: "pitch",
        name: "pitch",
        description: "i18n.collectors.pitch.description",
        version: "0",
        website: "https://app.pitch.com/app/dashboard/ad3a3e8e-45a9-4af4-98d1-f35f9d42140a/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1248087.jpg",
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
        loginUrl: "https://app.pitch.com/app/dashboard/ad3a3e8e-45a9-4af4-98d1-f35f9d42140a/billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PitchCollector.CONFIG);
    }
}
