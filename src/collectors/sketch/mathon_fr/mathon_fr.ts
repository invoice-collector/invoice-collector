
import { SketchCollector } from '../../sketchCollector';

export class MathonFrCollector extends SketchCollector {

    static CONFIG = {
        id: "mathon_fr",
        name: "Mathon.fr",
        description: "i18n.collectors.mathon_fr.description",
        version: "0",
        website: "https://www.mathon.fr/Mathon/identite/Login.aspx?ReturnUrl=%2fMonCompte%2fMonCompte.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122308.jpg",
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
        entryUrl: "https://www.mathon.fr/Mathon/identite/Login.aspx?ReturnUrl=%2fMonCompte%2fMonCompte.aspx",
    }

    constructor() {
        super(MathonFrCollector.CONFIG);
    }
}
