
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EauPubliqueEstEnsembleCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_publique_est_ensemble",
        name: "Eau Publique Est Ensemble",
        description: "i18n.collectors.eau_publique_est_ensemble.description",
        version: "0",
        website: "https://eau-potable.est-ensemble.fr/#/facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4650436.jpg",
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
        loginUrl: "https://eau-potable.est-ensemble.fr/#/facture",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EauPubliqueEstEnsembleCollector.CONFIG);
    }
}
