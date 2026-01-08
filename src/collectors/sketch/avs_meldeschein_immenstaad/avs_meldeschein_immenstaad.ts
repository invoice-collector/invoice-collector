
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvsMeldescheinImmenstaadCollector extends SketchCollector {

    static CONFIG = {
        id: "avs_meldeschein_immenstaad",
        name: "AVS Meldeschein Immenstaad",
        description: "i18n.collectors.avs_meldeschein_immenstaad.description",
        version: "0",
        website: "https://meldeschein.avs.de/immenstaad/?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2214183.jpg",
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
        loginUrl: "https://meldeschein.avs.de/immenstaad/?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AvsMeldescheinImmenstaadCollector.CONFIG);
    }
}
