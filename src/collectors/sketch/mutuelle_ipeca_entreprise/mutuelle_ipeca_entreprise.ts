
import { SketchCollector } from '../../sketchCollector';

export class MutuelleIpecaEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_ipeca_entreprise",
        name: "Mutuelle IPECA - Entreprise",
        description: "i18n.collectors.mutuelle_ipeca_entreprise.description",
        version: "0",
        website: "https://adherents.ipeca.fr/Entreprise/Pages/entreprise-home-actu.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129079.jpg",
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
        entryUrl: "https://adherents.ipeca.fr/Entreprise/Pages/entreprise-home-actu.aspx",
    }

    constructor() {
        super(MutuelleIpecaEntrepriseCollector.CONFIG);
    }
}
