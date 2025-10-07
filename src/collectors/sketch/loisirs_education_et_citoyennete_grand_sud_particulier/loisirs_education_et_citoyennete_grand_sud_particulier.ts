
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LoisirsEducationEtCitoyenneteGrandSudParticulierCollector extends SketchCollector {

    static CONFIG = {
        id: "loisirs_education_et_citoyennete_grand_sud_particulier",
        name: "Loisirs Education et Citoyennete Grand Sud - particulier",
        description: "i18n.collectors.loisirs_education_et_citoyennete_grand_sud_particulier.description",
        version: "0",
        website: "https://www.lecgs.org/fr/page/je-suis/je-suis-un-particulier.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107148.jpg",
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
        entryUrl: "https://www.lecgs.org/fr/page/je-suis/je-suis-un-particulier.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LoisirsEducationEtCitoyenneteGrandSudParticulierCollector.CONFIG);
    }
}
