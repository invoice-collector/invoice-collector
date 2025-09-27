
import { SketchCollector } from '../../sketchCollector';

export class AccesSapProsCollector extends SketchCollector {

    static CONFIG = {
        id: "acces_sap_pros",
        name: "Acces SAP Pros",
        description: "i18n.collectors.acces_sap_pros.description",
        version: "0",
        website: "https://adherent.acces-sap.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526266.jpg",
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
        entryUrl: "https://adherent.acces-sap.com/login",
    }

    constructor() {
        super(AccesSapProsCollector.CONFIG);
    }
}
