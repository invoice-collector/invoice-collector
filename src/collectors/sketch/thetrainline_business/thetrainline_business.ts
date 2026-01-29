
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ThetrainlineBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "thetrainline_business",
        name: "TheTrainline Business",
        description: "i18n.collectors.thetrainline_business.description",
        version: "0",
        website: "https://www.businesstravel.thetrainline.com/my-account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117389.jpg",
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
        loginUrl: "https://www.businesstravel.thetrainline.com/my-account/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ThetrainlineBusinessCollector.CONFIG);
    }
}
