
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleGroupeLourmelPersonnelCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_groupe_lourmel_personnel",
        name: "Mutuelle Groupe Lourmel - Personnel",
        description: "i18n.collectors.mutuelle_groupe_lourmel_personnel.description",
        version: "0",
        website: "https://espaceabonne.lourmel.com/lourmel/parAccueil.do?accueil=true&activerFrameResponsive=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129092.jpg",
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
        loginUrl: "https://espaceabonne.lourmel.com/lourmel/parAccueil.do?accueil=true&activerFrameResponsive=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleGroupeLourmelPersonnelCollector.CONFIG);
    }
}
