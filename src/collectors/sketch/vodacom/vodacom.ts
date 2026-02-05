
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodacomCollector extends SketchCollector {

    static CONFIG = {
        id: "vodacom",
        name: "Vodacom",
        description: "i18n.collectors.vodacom.description",
        version: "0",
        website: "https://www.vodacom.co.za/cloud/digital/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399632.jpg",
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
        loginUrl: "https://www.vodacom.co.za/cloud/digital/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VodacomCollector.CONFIG);
    }
}
