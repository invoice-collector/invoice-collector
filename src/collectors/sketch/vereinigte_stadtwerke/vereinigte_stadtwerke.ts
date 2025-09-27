
import { SketchCollector } from '../../sketchCollector';

export class VereinigteStadtwerkeCollector extends SketchCollector {

    static CONFIG = {
        id: "vereinigte_stadtwerke",
        name: "Vereinigte Stadtwerke",
        description: "i18n.collectors.vereinigte_stadtwerke.description",
        version: "0",
        website: "https://kundenportal.vereinigte-stadtwerke.de/sap/bc/ui5_ui5/sap/z_mcf_lief/index.html#Logon",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9206.jpg",
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
        entryUrl: "https://kundenportal.vereinigte-stadtwerke.de/sap/bc/ui5_ui5/sap/z_mcf_lief/index.html#Logon",
    }

    constructor() {
        super(VereinigteStadtwerkeCollector.CONFIG);
    }
}
