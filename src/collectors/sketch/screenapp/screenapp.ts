
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ScreenappCollector extends SketchCollector {

    static CONFIG = {
        id: "screenapp",
        name: "ScreenApp",
        description: "i18n.collectors.screenapp.description",
        version: "0",
        website: "https://screenapp.io/app/#/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4589603.jpg",
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
        loginUrl: "https://screenapp.io/app/#/signin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ScreenappCollector.CONFIG);
    }
}
