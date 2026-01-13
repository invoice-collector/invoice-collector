
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleAonHewittDecomptesCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_aon_hewitt_decomptes",
        name: "Mutuelle AON Hewitt (Decomptes)",
        description: "i18n.collectors.mutuelle_aon_hewitt_decomptes.description",
        version: "0",
        website: "https://www.aon.com/france/produits-et-services/rh/gestion_frais_medicaux_regimes_prevoyance.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125699.jpg",
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
        loginUrl: "https://www.aon.com/france/produits-et-services/rh/gestion_frais_medicaux_regimes_prevoyance.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleAonHewittDecomptesCollector.CONFIG);
    }
}
