
import { SketchCollector } from '../../sketchCollector';

export class MutuelleMgcEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_mgc_entreprise",
        name: "Mutuelle MGC - Entreprise",
        description: "i18n.collectors.mutuelle_mgc_entreprise.description",
        version: "0",
        website: "https://monespacepersonnel.cimut.net/web/mgc-entreprise",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129362.jpg",
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
        entryUrl: "https://monespacepersonnel.cimut.net/web/mgc-entreprise",
    }

    constructor() {
        super(MutuelleMgcEntrepriseCollector.CONFIG);
    }
}
