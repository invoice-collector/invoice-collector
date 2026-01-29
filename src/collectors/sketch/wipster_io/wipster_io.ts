
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WipsterIoCollector extends SketchCollector {

    static CONFIG = {
        id: "wipster_io",
        name: "Wipster.io",
        description: "i18n.collectors.wipster_io.description",
        version: "0",
        website: "https://app.wipster.io/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15750.jpg",
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
        loginUrl: "https://app.wipster.io/Login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WipsterIoCollector.CONFIG);
    }
}
