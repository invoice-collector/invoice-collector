
import { SketchCollector } from '../../sketchCollector';

export class MutuelleDuSoleilEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_du_soleil_entreprise",
        name: "Mutuelle Du Soleil - entreprise",
        description: "i18n.collectors.mutuelle_du_soleil_entreprise.description",
        version: "0",
        website: "https://entreprises.mutuellesdusoleil.fr/login#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127689.jpg",
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
        entryUrl: "https://entreprises.mutuellesdusoleil.fr/login#/",
    }

    constructor() {
        super(MutuelleDuSoleilEntrepriseCollector.CONFIG);
    }
}
