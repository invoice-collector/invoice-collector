
import { SketchCollector } from '../../sketchCollector';

export class CreditAgricoleIdfCollector extends SketchCollector {

    static CONFIG = {
        id: "credit_agricole_idf",
        name: "Credit Agricole IDF",
        description: "i18n.collectors.credit_agricole_idf.description",
        version: "0",
        website: "https://www.credit-agricole.fr/ca-paris/professionnel/acceder-a-mes-comptes.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1109635.jpg",
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
        entryUrl: "https://www.credit-agricole.fr/ca-paris/professionnel/acceder-a-mes-comptes.html",
    }

    constructor() {
        super(CreditAgricoleIdfCollector.CONFIG);
    }
}
