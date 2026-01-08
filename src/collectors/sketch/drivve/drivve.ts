
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DrivveCollector extends SketchCollector {

    static CONFIG = {
        id: "drivve",
        name: "Drivve",
        description: "i18n.collectors.drivve.description",
        version: "0",
        website: "http://www.drivve.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14404.jpg",
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
        loginUrl: "http://www.drivve.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DrivveCollector.CONFIG);
    }
}
