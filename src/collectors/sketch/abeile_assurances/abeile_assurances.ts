
import { SketchCollector } from '../../sketchCollector';

export class AbeileAssurancesCollector extends SketchCollector {

    static CONFIG = {
        id: "abeile_assurances",
        name: "Abeile Assurances",
        description: "i18n.collectors.abeile_assurances.description",
        version: "0",
        website: "https://www.abeille-assurances.fr/espacepersonnel/MonCompte/Connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2182560.jpg",
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
        entryUrl: "https://www.abeille-assurances.fr/espacepersonnel/MonCompte/Connexion",
    }

    constructor() {
        super(AbeileAssurancesCollector.CONFIG);
    }
}
