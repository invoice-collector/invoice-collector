
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SfrBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_business",
        name: "SFR Business",
        description: "i18n.collectors.sfr_business.description",
        version: "0",
        website: "https://www.sfrbusiness.fr/espace-client/portail/#/factures",
        logo: "https://static.s-sfr.fr/assets/logos/SFR_Business.svg",
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
        loginUrl: "https://www.sfrbusiness.fr/espace-client/portail/#/factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SfrBusinessCollector.CONFIG);
    }
}
