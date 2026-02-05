
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OnlineDruckBizCollector extends SketchCollector {

    static CONFIG = {
        id: "online_druck_biz",
        name: "Online Druck.biz",
        description: "i18n.collectors.online_druck_biz.description",
        version: "0",
        website: "https://www.online-druck.biz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8228.jpg",
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
        loginUrl: "https://www.online-druck.biz",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OnlineDruckBizCollector.CONFIG);
    }
}
