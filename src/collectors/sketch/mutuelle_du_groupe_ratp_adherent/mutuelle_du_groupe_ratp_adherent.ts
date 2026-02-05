
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleDuGroupeRatpAdherentCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_du_groupe_ratp_adherent",
        name: "Mutuelle Du Groupe Ratp - adherent",
        description: "i18n.collectors.mutuelle_du_groupe_ratp_adherent.description",
        version: "0",
        website: "https://mutuelleratp.fr/espace-adherent/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127551.jpg",
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
        loginUrl: "https://mutuelleratp.fr/espace-adherent/connexion/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleDuGroupeRatpAdherentCollector.CONFIG);
    }
}
