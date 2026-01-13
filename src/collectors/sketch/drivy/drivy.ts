
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DrivyCollector extends SketchCollector {

    static CONFIG = {
        id: "drivy",
        name: "drivy",
        description: "i18n.collectors.drivy.description",
        version: "0",
        website: "https://www.drivy.com/dashboard/payments?role=driver",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77660.jpg",
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
        loginUrl: "https://www.drivy.com/dashboard/payments?role=driver",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DrivyCollector.CONFIG);
    }
}
