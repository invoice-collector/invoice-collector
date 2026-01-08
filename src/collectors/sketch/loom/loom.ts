
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LoomCollector extends SketchCollector {

    static CONFIG = {
        id: "loom",
        name: "Loom",
        description: "i18n.collectors.loom.description",
        version: "0",
        website: "https://www.loom.com/account-settings#billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202977.jpg",
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
        loginUrl: "https://www.loom.com/account-settings#billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LoomCollector.CONFIG);
    }
}
