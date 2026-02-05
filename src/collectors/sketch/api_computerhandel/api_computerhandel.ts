
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ApiComputerhandelCollector extends SketchCollector {

    static CONFIG = {
        id: "api_computerhandel",
        name: "api computerhandel",
        description: "i18n.collectors.api_computerhandel.description",
        version: "0",
        website: "https://shop.api.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88378.jpg",
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
        loginUrl: "https://shop.api.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ApiComputerhandelCollector.CONFIG);
    }
}
