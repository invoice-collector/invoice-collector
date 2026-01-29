
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NErgieNetzGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "n_ergie_netz_gmbh",
        name: "N-Ergie-Netz GmbH",
        description: "i18n.collectors.n_ergie_netz_gmbh.description",
        version: "0",
        website: "https://www.n-ergie-netz.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090086.jpg",
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
        loginUrl: "https://www.n-ergie-netz.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NErgieNetzGmbhCollector.CONFIG);
    }
}
