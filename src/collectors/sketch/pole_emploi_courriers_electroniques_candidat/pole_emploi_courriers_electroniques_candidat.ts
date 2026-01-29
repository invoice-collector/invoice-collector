
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PoleEmploiCourriersElectroniquesCandidatCollector extends SketchCollector {

    static CONFIG = {
        id: "pole_emploi_courriers_electroniques_candidat",
        name: "Pole emploi (courriers electroniques) - Candidat",
        description: "i18n.collectors.pole_emploi_courriers_electroniques_candidat.description",
        version: "0",
        website: "https://www.pole-emploi.fr/region/ile-de-france/informations/candidat-@/region/ile-de-france/index.jspz?id=54125",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108083.jpg",
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
        loginUrl: "https://www.pole-emploi.fr/region/ile-de-france/informations/candidat-@/region/ile-de-france/index.jspz?id=54125",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PoleEmploiCourriersElectroniquesCandidatCollector.CONFIG);
    }
}
