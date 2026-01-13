
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MistergooddealComCollector extends SketchCollector {

    static CONFIG = {
        id: "mistergooddeal_com",
        name: "MisterGoodDeal.com",
        description: "i18n.collectors.mistergooddeal_com.description",
        version: "0",
        website: "https://www.mistergooddeal.com/views/account/identification.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27327.jpg",
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
        loginUrl: "https://www.mistergooddeal.com/views/account/identification.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MistergooddealComCollector.CONFIG);
    }
}
