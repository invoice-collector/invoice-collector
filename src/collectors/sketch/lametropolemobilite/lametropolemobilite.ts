import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaMetropoleMobiliteCollector extends SketchCollector {

    static CONFIG = {
        id: "lametropolemobilite",
        name: "La Métropole Mobilité",
        description: "i18n.collectors.lametropolemobilite.description",
        version: "0",
        website: "https://www.lametropolemobilite.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/8/80/La_M%C3%A9tropole_Mobilit%C3%A9.svg",
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
        loginUrl: "https://is.sso.prod.instant-system.com/auth/realms/61/protocol/openid-connect/auth?redirect_uri=https%3A%2F%2Fwww.lametropolemobilite.fr%2Ffr%2Fsignedin&client_id=instant-account&response_type=code&ui_locales=fr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LaMetropoleMobiliteCollector.CONFIG);
    }
}
