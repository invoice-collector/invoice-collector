
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FoussierCollector extends SketchCollector {

    static CONFIG = {
        id: "foussier",
        name: "Foussier",
        description: "i18n.collectors.foussier.description",
        version: "0",
        website: "https://www.foussier.fr/recherche?q=amenagement%20salle%20de%20bain&gclid=EAIaIQobChMIrJbLiI_c7QIVFrqWCh1EdgNVEAAYASAAEgJH_fD_BwE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778804.jpg",
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
        loginUrl: "https://www.foussier.fr/recherche?q=amenagement%20salle%20de%20bain&gclid=EAIaIQobChMIrJbLiI_c7QIVFrqWCh1EdgNVEAAYASAAEgJH_fD_BwE",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FoussierCollector.CONFIG);
    }
}
