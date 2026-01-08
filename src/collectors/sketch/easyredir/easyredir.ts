
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EasyredirCollector extends SketchCollector {

    static CONFIG = {
        id: "easyredir",
        name: "Easyredir",
        description: "i18n.collectors.easyredir.description",
        version: "0",
        website: "https://dashboard.easyredir.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102715.jpg",
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
        loginUrl: "https://dashboard.easyredir.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyredirCollector.CONFIG);
    }
}
