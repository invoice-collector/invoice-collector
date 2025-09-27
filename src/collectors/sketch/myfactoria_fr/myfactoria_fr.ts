
import { SketchCollector } from '../../sketchCollector';

export class MyfactoriaFrCollector extends SketchCollector {

    static CONFIG = {
        id: "myfactoria_fr",
        name: "MyFactoria.fr",
        description: "i18n.collectors.myfactoria_fr.description",
        version: "0",
        website: "https://myfactoria.fr/ArtisWeb/portail/ventes/factures/entree.action?cKey=1&cStatus=P&session=mYPzSaFTCGUvUVa3&typeLicence=01",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445713.jpg",
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
        entryUrl: "https://myfactoria.fr/ArtisWeb/portail/ventes/factures/entree.action?cKey=1&cStatus=P&session=mYPzSaFTCGUvUVa3&typeLicence=01",
    }

    constructor() {
        super(MyfactoriaFrCollector.CONFIG);
    }
}
