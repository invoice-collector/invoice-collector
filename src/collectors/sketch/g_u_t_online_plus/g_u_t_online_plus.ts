
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GUTOnlinePlusCollector extends SketchCollector {

    static CONFIG = {
        id: "g_u_t_online_plus",
        name: "G.U.T. Online Plus",
        description: "i18n.collectors.g_u_t_online_plus.description",
        version: "0",
        website: "https://www.gutonlineplus.de/#MainPage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200616.jpg",
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
        loginUrl: "https://www.gutonlineplus.de/#MainPage",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GUTOnlinePlusCollector.CONFIG);
    }
}
