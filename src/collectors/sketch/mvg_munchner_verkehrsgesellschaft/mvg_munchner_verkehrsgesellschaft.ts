
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MvgMunchnerVerkehrsgesellschaftCollector extends SketchCollector {

    static CONFIG = {
        id: "mvg_munchner_verkehrsgesellschaft",
        name: "MVG - Munchner Verkehrsgesellschaft",
        description: "i18n.collectors.mvg_munchner_verkehrsgesellschaft.description",
        version: "0",
        website: "https://login.muenchen.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11060.jpg",
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
        loginUrl: "https://login.muenchen.de/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MvgMunchnerVerkehrsgesellschaftCollector.CONFIG);
    }
}
