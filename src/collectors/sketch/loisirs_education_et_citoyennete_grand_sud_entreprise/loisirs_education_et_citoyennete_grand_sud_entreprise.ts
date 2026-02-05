
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LoisirsEducationEtCitoyenneteGrandSudEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "loisirs_education_et_citoyennete_grand_sud_entreprise",
        name: "Loisirs Education et Citoyennete Grand Sud - entreprise",
        description: "i18n.collectors.loisirs_education_et_citoyennete_grand_sud_entreprise.description",
        version: "0",
        website: "https://www.lecgs.org/fr/page/je-suis/salarie.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107149.jpg",
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
        loginUrl: "https://www.lecgs.org/fr/page/je-suis/salarie.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LoisirsEducationEtCitoyenneteGrandSudEntrepriseCollector.CONFIG);
    }
}
