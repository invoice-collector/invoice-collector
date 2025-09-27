
import { SketchCollector } from '../../sketchCollector';

export class ImprimerieEuropeenneIngCollector extends SketchCollector {

    static CONFIG = {
        id: "imprimerie_europeenne_ing",
        name: "imprimerie europeenne (ING)",
        description: "i18n.collectors.imprimerie_europeenne_ing.description",
        version: "0",
        website: "https://www.imprimerie-europeenne.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1445460.jpg",
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
        entryUrl: "https://www.imprimerie-europeenne.com/account/invoices",
    }

    constructor() {
        super(ImprimerieEuropeenneIngCollector.CONFIG);
    }
}
