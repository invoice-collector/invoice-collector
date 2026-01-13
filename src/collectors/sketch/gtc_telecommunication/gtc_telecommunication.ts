
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GtcTelecommunicationCollector extends SketchCollector {

    static CONFIG = {
        id: "gtc_telecommunication",
        name: "GTC TeleCommunication",
        description: "i18n.collectors.gtc_telecommunication.description",
        version: "0",
        website: "https://gtc.de/infos-kontakt/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/96055.jpg",
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
        loginUrl: "https://gtc.de/infos-kontakt/login.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GtcTelecommunicationCollector.CONFIG);
    }
}
