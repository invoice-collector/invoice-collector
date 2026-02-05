
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CnmssAvisDePaiementCollector extends SketchCollector {

    static CONFIG = {
        id: "cnmss_avis_de_paiement",
        name: "CNMSS (avis de paiement)",
        description: "i18n.collectors.cnmss_avis_de_paiement.description",
        version: "0",
        website: "https://www.cnmss.fr/professionnel-de-sante/mes-services-en-ligne/amelipro/consulter-vos-paiements-5772.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123805.jpg",
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
        loginUrl: "https://www.cnmss.fr/professionnel-de-sante/mes-services-en-ligne/amelipro/consulter-vos-paiements-5772.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CnmssAvisDePaiementCollector.CONFIG);
    }
}
