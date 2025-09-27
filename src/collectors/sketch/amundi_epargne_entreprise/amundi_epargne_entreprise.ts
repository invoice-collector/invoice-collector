
import { SketchCollector } from '../../sketchCollector';

export class AmundiEpargneEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "amundi_epargne_entreprise",
        name: "Amundi Epargne Entreprise",
        description: "i18n.collectors.amundi_epargne_entreprise.description",
        version: "0",
        website: "https://www.amundi-ee.com/psf/#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109159.jpg",
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
        entryUrl: "https://www.amundi-ee.com/psf/#login",
    }

    constructor() {
        super(AmundiEpargneEntrepriseCollector.CONFIG);
    }
}
