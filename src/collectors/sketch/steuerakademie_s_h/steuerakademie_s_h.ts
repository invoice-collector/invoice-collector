
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SteuerakademieSHCollector extends SketchCollector {

    static CONFIG = {
        id: "steuerakademie_s_h",
        name: "Steuerakademie S-H",
        description: "i18n.collectors.steuerakademie_s_h.description",
        version: "0",
        website: "https://stbvsh-seminare.de/auctores/scs/imc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/387979.jpg",
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
        loginUrl: "https://stbvsh-seminare.de/auctores/scs/imc",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SteuerakademieSHCollector.CONFIG);
    }
}
