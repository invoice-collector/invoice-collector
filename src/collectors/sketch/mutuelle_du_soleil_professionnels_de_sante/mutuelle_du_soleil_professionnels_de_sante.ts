
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleDuSoleilProfessionnelsDeSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_du_soleil_professionnels_de_sante",
        name: "Mutuelle Du Soleil - professionnels de sante",
        description: "i18n.collectors.mutuelle_du_soleil_professionnels_de_sante.description",
        version: "0",
        website: "https://tiers.mutuellesdusoleil.fr/login#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127687.jpg",
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
        loginUrl: "https://tiers.mutuellesdusoleil.fr/login#/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleDuSoleilProfessionnelsDeSanteCollector.CONFIG);
    }
}
