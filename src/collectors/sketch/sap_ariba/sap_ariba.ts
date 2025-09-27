
import { SketchCollector } from '../../sketchCollector';

export class SapAribaCollector extends SketchCollector {

    static CONFIG = {
        id: "sap_ariba",
        name: "SAP Ariba",
        description: "i18n.collectors.sap_ariba.description",
        version: "0",
        website: "https://service.ariba.com/ProfileManagement.aw/109544067/aw?awh=r&awssk=Q00yLHqP&dard=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2183867.jpg",
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
        entryUrl: "https://service.ariba.com/ProfileManagement.aw/109544067/aw?awh=r&awssk=Q00yLHqP&dard=1",
    }

    constructor() {
        super(SapAribaCollector.CONFIG);
    }
}
