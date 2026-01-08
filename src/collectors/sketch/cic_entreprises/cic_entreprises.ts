
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CicEntreprisesCollector extends SketchCollector {

    static CONFIG = {
        id: "cic_entreprises",
        name: "CIC - Entreprises",
        description: "i18n.collectors.cic_entreprises.description",
        version: "0",
        website: "https://www.cic.fr/fr/banque/documentinternet.html?_tabi=C&a_tiers=1300007491864&_pid=SelectDocument&k_typePageDoc=DocsAutres",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/670849.jpg",
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
        loginUrl: "https://www.cic.fr/fr/banque/documentinternet.html?_tabi=C&a_tiers=1300007491864&_pid=SelectDocument&k_typePageDoc=DocsAutres",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CicEntreprisesCollector.CONFIG);
    }
}
