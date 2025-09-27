
import { SketchCollector } from '../../sketchCollector';

export class LbsPrimalianCollector extends SketchCollector {

    static CONFIG = {
        id: "lbs_primalian",
        name: "LBS - PRIMALIAN",
        description: "i18n.collectors.lbs_primalian.description",
        version: "0",
        website: "https://portail-lbs33.artis.fr/ArtisWebLbs33/portail/ventes/factures/entree.action?cKey=1&cStatus=P&session=fGkPzEhOldEBb3wS&typeLicence=LBS17",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4604555.jpg",
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
        entryUrl: "https://portail-lbs33.artis.fr/ArtisWebLbs33/portail/ventes/factures/entree.action?cKey=1&cStatus=P&session=fGkPzEhOldEBb3wS&typeLicence=LBS17",
    }

    constructor() {
        super(LbsPrimalianCollector.CONFIG);
    }
}
