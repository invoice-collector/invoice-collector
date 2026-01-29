
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PoleEmploiCourriersElectroniquesEmployeurCollector extends SketchCollector {

    static CONFIG = {
        id: "pole_emploi_courriers_electroniques_employeur",
        name: "Pole emploi (courriers electroniques) - Employeur",
        description: "i18n.collectors.pole_emploi_courriers_electroniques_employeur.description",
        version: "0",
        website: "https://www.pole-emploi.fr/region/ile-de-france/informations/employeur-@/region/ile-de-france/index.jspz?id=54126",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108084.jpg",
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
        loginUrl: "https://www.pole-emploi.fr/region/ile-de-france/informations/employeur-@/region/ile-de-france/index.jspz?id=54126",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PoleEmploiCourriersElectroniquesEmployeurCollector.CONFIG);
    }
}
