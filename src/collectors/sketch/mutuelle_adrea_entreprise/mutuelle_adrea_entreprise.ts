
import { SketchCollector } from '../../sketchCollector';

export class MutuelleAdreaEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_adrea_entreprise",
        name: "Mutuelle Adrea - Entreprise",
        description: "i18n.collectors.mutuelle_adrea_entreprise.description",
        version: "0",
        website: "https://entreprise.adrea.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125696.jpg",
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
        entryUrl: "https://entreprise.adrea.fr/",
    }

    constructor() {
        super(MutuelleAdreaEntrepriseCollector.CONFIG);
    }
}
