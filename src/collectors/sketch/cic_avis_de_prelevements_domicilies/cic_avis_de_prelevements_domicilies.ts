
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CicAvisDePrelevementsDomiciliesCollector extends SketchCollector {

    static CONFIG = {
        id: "cic_avis_de_prelevements_domicilies",
        name: "CIC - Avis de prelevements domicilies",
        description: "i18n.collectors.cic_avis_de_prelevements_domicilies.description",
        version: "0",
        website: "https://www.cic.fr/fr/particulier/devenir-client/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115980.jpg",
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
        loginUrl: "https://www.cic.fr/fr/particulier/devenir-client/index.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CicAvisDePrelevementsDomiciliesCollector.CONFIG);
    }
}
