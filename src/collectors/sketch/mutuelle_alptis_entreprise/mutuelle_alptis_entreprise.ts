
import { SketchCollector } from '../../sketchCollector';

export class MutuelleAlptisEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_alptis_entreprise",
        name: "Mutuelle Alptis - Entreprise",
        description: "i18n.collectors.mutuelle_alptis_entreprise.description",
        version: "0",
        website: "https://adherent.alptis.org/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125688.jpg",
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
        entryUrl: "https://adherent.alptis.org/login",
    }

    constructor() {
        super(MutuelleAlptisEntrepriseCollector.CONFIG);
    }
}
