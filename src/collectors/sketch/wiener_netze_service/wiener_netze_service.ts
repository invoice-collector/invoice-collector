
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WienerNetzeServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "wiener_netze_service",
        name: "Wiener Netze Service",
        description: "i18n.collectors.wiener_netze_service.description",
        version: "0",
        website: "https://service.wienernetze.at/#/rechnungsarchiv/anlagenauswahl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1222427.jpg",
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
        loginUrl: "https://service.wienernetze.at/#/rechnungsarchiv/anlagenauswahl",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WienerNetzeServiceCollector.CONFIG);
    }
}
