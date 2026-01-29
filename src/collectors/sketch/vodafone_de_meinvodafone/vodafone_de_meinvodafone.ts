
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneDeMeinvodafoneCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_de_meinvodafone",
        name: "Vodafone.de - MeinVodafone",
        description: "i18n.collectors.vodafone_de_meinvodafone.description",
        version: "0",
        website: "https://www.vodafone.de/ussa/login/login.ftel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/308.jpg",
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
        loginUrl: "https://www.vodafone.de/ussa/login/login.ftel",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VodafoneDeMeinvodafoneCollector.CONFIG);
    }
}
