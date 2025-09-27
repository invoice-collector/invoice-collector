
import { SketchCollector } from '../../sketchCollector';

export class MutuelleDiotSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_diot_sante",
        name: "Mutuelle Diot sante",
        description: "i18n.collectors.mutuelle_diot_sante.description",
        version: "0",
        website: "https://www.diot.com/fr/nos-solutions-d-assurances-diot/particuliers/sante-auto-habitation-protection-de-la-famille",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127694.jpg",
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
        entryUrl: "https://www.diot.com/fr/nos-solutions-d-assurances-diot/particuliers/sante-auto-habitation-protection-de-la-famille",
    }

    constructor() {
        super(MutuelleDiotSanteCollector.CONFIG);
    }
}
