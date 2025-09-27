
import { SketchCollector } from '../../sketchCollector';

export class EnercoopGrandComptesCollector extends SketchCollector {

    static CONFIG = {
        id: "enercoop_grand_comptes",
        name: "enercoop grand comptes",
        description: "i18n.collectors.enercoop_grand_comptes.description",
        version: "0",
        website: "https://mon-espace.enercoop.fr/grandscomptes-collectivites/sites",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526340.jpg",
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
        entryUrl: "https://mon-espace.enercoop.fr/grandscomptes-collectivites/sites",
    }

    constructor() {
        super(EnercoopGrandComptesCollector.CONFIG);
    }
}
