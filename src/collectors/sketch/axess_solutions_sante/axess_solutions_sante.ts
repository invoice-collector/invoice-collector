
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AxessSolutionsSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "axess_solutions_sante",
        name: "AXESS - Solutions Sante",
        description: "i18n.collectors.axess_solutions_sante.description",
        version: "0",
        website: "https://pst-astgl.medtra.fr/liste-factures-adh.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/823879.jpg",
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
        loginUrl: "https://pst-astgl.medtra.fr/liste-factures-adh.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AxessSolutionsSanteCollector.CONFIG);
    }
}
