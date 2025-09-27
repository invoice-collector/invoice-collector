
import { SketchCollector } from '../../sketchCollector';

export class CreditAgricoleNormandieProfessionelCollector extends SketchCollector {

    static CONFIG = {
        id: "credit_agricole_normandie_professionel",
        name: "Credit Agricole Normandie - Professionel",
        description: "i18n.collectors.credit_agricole_normandie_professionel.description",
        version: "0",
        website: "https://www.credit-agricole.fr/ca-normandie/entreprise/operations/documents/e-documents.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4195658.jpg",
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
        entryUrl: "https://www.credit-agricole.fr/ca-normandie/entreprise/operations/documents/e-documents.html",
    }

    constructor() {
        super(CreditAgricoleNormandieProfessionelCollector.CONFIG);
    }
}
