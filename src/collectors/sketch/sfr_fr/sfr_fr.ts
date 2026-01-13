
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SfrFrCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_fr",
        name: "SFR (.fr)",
        description: "i18n.collectors.sfr_fr.description",
        version: "0",
        website: "https://sfr.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/SFR-2022-logo.svg",
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
        loginUrl: "https://www.sfr.fr/mon-espace-client/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SfrFrCollector.CONFIG);
    }
}
