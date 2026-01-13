
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SilkypressCollector extends SketchCollector {

    static CONFIG = {
        id: "silkypress",
        name: "SilkyPress",
        description: "i18n.collectors.silkypress.description",
        version: "0",
        website: "https://www.silkypress.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/780350.jpg",
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
        loginUrl: "https://www.silkypress.com/my-account/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SilkypressCollector.CONFIG);
    }
}
