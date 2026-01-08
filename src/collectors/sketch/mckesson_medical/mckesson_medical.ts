
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MckessonMedicalCollector extends SketchCollector {

    static CONFIG = {
        id: "mckesson_medical",
        name: "McKesson Medical",
        description: "i18n.collectors.mckesson_medical.description",
        version: "0",
        website: "https://mms.mckesson.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741175.jpg",
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
        loginUrl: "https://mms.mckesson.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MckessonMedicalCollector.CONFIG);
    }
}
