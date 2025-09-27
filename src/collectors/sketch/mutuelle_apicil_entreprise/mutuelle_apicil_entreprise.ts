
import { SketchCollector } from '../../sketchCollector';

export class MutuelleApicilEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_apicil_entreprise",
        name: "Mutuelle Apicil - Entreprise",
        description: "i18n.collectors.mutuelle_apicil_entreprise.description",
        version: "0",
        website: "https://www.apicil.com/espace-entreprise#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125683.jpg",
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
        entryUrl: "https://www.apicil.com/espace-entreprise#/",
    }

    constructor() {
        super(MutuelleApicilEntrepriseCollector.CONFIG);
    }
}
