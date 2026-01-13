
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VenngageCollector extends SketchCollector {

    static CONFIG = {
        id: "venngage",
        name: "Venngage",
        description: "i18n.collectors.venngage.description",
        version: "0",
        website: "https://infograph.venngage.com/account/billinghistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654783.jpg",
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
        loginUrl: "https://infograph.venngage.com/account/billinghistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VenngageCollector.CONFIG);
    }
}
