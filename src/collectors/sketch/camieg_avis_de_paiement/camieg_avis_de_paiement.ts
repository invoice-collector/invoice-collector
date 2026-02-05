
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CamiegAvisDePaiementCollector extends SketchCollector {

    static CONFIG = {
        id: "camieg_avis_de_paiement",
        name: "Camieg (avis de paiement)",
        description: "i18n.collectors.camieg_avis_de_paiement.description",
        version: "0",
        website: "https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_somtc=true%20_blank%20-%20%22Mon%20compte%20Ameli%22",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125332.jpg",
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
        loginUrl: "https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_somtc=true%20_blank%20-%20%22Mon%20compte%20Ameli%22",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CamiegAvisDePaiementCollector.CONFIG);
    }
}
