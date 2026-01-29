
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WindscribeCollector extends SketchCollector {

    static CONFIG = {
        id: "windscribe",
        name: "Windscribe",
        description: "i18n.collectors.windscribe.description",
        version: "0",
        website: "https://windscribe.com/myaccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73644.jpg",
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
        loginUrl: "https://windscribe.com/myaccount",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WindscribeCollector.CONFIG);
    }
}
