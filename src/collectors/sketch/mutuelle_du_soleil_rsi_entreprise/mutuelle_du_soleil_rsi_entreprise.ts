
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleDuSoleilRsiEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_du_soleil_rsi_entreprise",
        name: "Mutuelle Du Soleil - RSI - entreprise",
        description: "i18n.collectors.mutuelle_du_soleil_rsi_entreprise.description",
        version: "0",
        website: "https://adherents.mutuellesdusoleil.fr/login#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127555.jpg",
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
        loginUrl: "https://adherents.mutuellesdusoleil.fr/login#/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleDuSoleilRsiEntrepriseCollector.CONFIG);
    }
}
