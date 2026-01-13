import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';
import { log } from 'console';

export class RtmFrCollector extends SketchCollector {

    static CONFIG = {
        id: "rtm_fr",
        name: "Régie des Transports Métropolitains (RTM)",
        description: "i18n.collectors.rtm_fr.description",
        version: "0",
        website: "https://www.rtm.fr",
        logo: "https://www.rtm.fr/themes/bluedrop/svg/logo.svg",
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
        loginUrl: "https://www.rtm.fr/martm/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RtmFrCollector.CONFIG);
    }
}
