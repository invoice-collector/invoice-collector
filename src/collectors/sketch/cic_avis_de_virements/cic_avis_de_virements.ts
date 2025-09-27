
import { SketchCollector } from '../../sketchCollector';

export class CicAvisDeVirementsCollector extends SketchCollector {

    static CONFIG = {
        id: "cic_avis_de_virements",
        name: "CIC - Avis de virements",
        description: "i18n.collectors.cic_avis_de_virements.description",
        version: "0",
        website: "https://www.cic.fr/fr/banque/virements/vplw_bl.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116119.jpg",
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
        entryUrl: "https://www.cic.fr/fr/banque/virements/vplw_bl.html",
    }

    constructor() {
        super(CicAvisDeVirementsCollector.CONFIG);
    }
}
