
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleDuGroupeRatpProfessionnelCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_du_groupe_ratp_professionnel",
        name: "Mutuelle Du Groupe Ratp - professionnel",
        description: "i18n.collectors.mutuelle_du_groupe_ratp_professionnel.description",
        version: "0",
        website: "https://mutuelleratp.fr/espace-professionnel/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127552.jpg",
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
        loginUrl: "https://mutuelleratp.fr/espace-professionnel/connexion/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleDuGroupeRatpProfessionnelCollector.CONFIG);
    }
}
