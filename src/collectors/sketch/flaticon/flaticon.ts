
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlaticonCollector extends SketchCollector {

    static CONFIG = {
        id: "flaticon",
        name: "Flaticon",
        description: "i18n.collectors.flaticon.description",
        version: "0",
        website: "https://www.flaticon.com/profile/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15579.jpg",
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
        loginUrl: "https://www.flaticon.com/profile/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlaticonCollector.CONFIG);
    }
}
