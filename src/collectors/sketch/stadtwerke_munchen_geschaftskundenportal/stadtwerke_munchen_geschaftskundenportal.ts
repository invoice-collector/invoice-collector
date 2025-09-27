
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeMunchenGeschaftskundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_munchen_geschaftskundenportal",
        name: "Stadtwerke Munchen Geschaftskundenportal",
        description: "i18n.collectors.stadtwerke_munchen_geschaftskundenportal.description",
        version: "0",
        website: "https://geschaeftskundenportal.swm.de/secure/rechnungsuebersicht.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/110054.jpg",
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
        entryUrl: "https://geschaeftskundenportal.swm.de/secure/rechnungsuebersicht.html",
    }

    constructor() {
        super(StadtwerkeMunchenGeschaftskundenportalCollector.CONFIG);
    }
}
