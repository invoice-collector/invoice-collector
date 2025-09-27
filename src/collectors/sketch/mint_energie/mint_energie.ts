
import { SketchCollector } from '../../sketchCollector';

export class MintEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "mint_energie",
        name: "Mint Energie",
        description: "i18n.collectors.mint_energie.description",
        version: "0",
        website: "https://www.mint-energie.com/Pages/Compte/informations_paiement.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/771812.jpg",
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
        entryUrl: "https://www.mint-energie.com/Pages/Compte/informations_paiement.aspx",
    }

    constructor() {
        super(MintEnergieCollector.CONFIG);
    }
}
