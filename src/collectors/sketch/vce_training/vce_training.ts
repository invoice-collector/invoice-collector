
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VceTrainingCollector extends SketchCollector {

    static CONFIG = {
        id: "vce_training",
        name: "VCE Training",
        description: "i18n.collectors.vce_training.description",
        version: "0",
        website: "https://vcetrainer.com/Account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/432659.jpg",
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
        loginUrl: "https://vcetrainer.com/Account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VceTrainingCollector.CONFIG);
    }
}
