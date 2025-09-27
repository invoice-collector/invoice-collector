
import { SketchCollector } from '../../sketchCollector';

export class PoleEmploiAttestationFiscaleCollector extends SketchCollector {

    static CONFIG = {
        id: "pole_emploi_attestation_fiscale",
        name: "Pole emploi (attestation fiscale)",
        description: "i18n.collectors.pole_emploi_attestation_fiscale.description",
        version: "0",
        website: "https://authentification-candidat.pole-emploi.fr/connexion/XUI/#login/&realm=%2Findividu&goto=https%3A%2F%2Fauthentification-candidat.pole-emploi.fr%2Fconnexion%2Foauth2%2Fauthorize%3Frealm%3D%252Findividu%26response_type%3Did_token%2520token%26scope%3Dop",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107901.jpg",
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
        entryUrl: "https://authentification-candidat.pole-emploi.fr/connexion/XUI/#login/&realm=%2Findividu&goto=https%3A%2F%2Fauthentification-candidat.pole-emploi.fr%2Fconnexion%2Foauth2%2Fauthorize%3Frealm%3D%252Findividu%26response_type%3Did_token%2520token%26scope%3Dop",
    }

    constructor() {
        super(PoleEmploiAttestationFiscaleCollector.CONFIG);
    }
}
