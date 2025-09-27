
import { SketchCollector } from '../../sketchCollector';

export class DolibarrKerlanCollector extends SketchCollector {

    static CONFIG = {
        id: "dolibarr_kerlan",
        name: "Dolibarr Kerlan",
        description: "i18n.collectors.dolibarr_kerlan.description",
        version: "0",
        website: "https://dolibarr.kerlan-info.fr/compta/facture/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4418410.jpg",
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
        entryUrl: "https://dolibarr.kerlan-info.fr/compta/facture/",
    }

    constructor() {
        super(DolibarrKerlanCollector.CONFIG);
    }
}
