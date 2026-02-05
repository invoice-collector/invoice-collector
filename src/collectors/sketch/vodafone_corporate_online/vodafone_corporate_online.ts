
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneCorporateOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_corporate_online",
        name: "Vodafone Corporate Online",
        description: "i18n.collectors.vodafone_corporate_online.description",
        version: "0",
        website: "https://www.vcol.co.uk/home/default.vco",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396501.jpg",
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
        loginUrl: "https://www.vcol.co.uk/home/default.vco",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VodafoneCorporateOnlineCollector.CONFIG);
    }
}
