
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleMercerProfessionnelsDeSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_mercer_professionnels_de_sante",
        name: "Mutuelle Mercer - Professionnels De Sante",
        description: "i18n.collectors.mutuelle_mercer_professionnels_de_sante.description",
        version: "0",
        website: "https://prosante.mercernet.fr/login#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130066.jpg",
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
        loginUrl: "https://prosante.mercernet.fr/login#/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleMercerProfessionnelsDeSanteCollector.CONFIG);
    }
}
