
import { SketchCollector } from '../../sketchCollector';

export class DeutscheBahnDokumentenAndRechnungsportalCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_bahn_dokumenten_and_rechnungsportal",
        name: "Deutsche Bahn Dokumenten & Rechnungsportal",
        description: "i18n.collectors.deutsche_bahn_dokumenten_and_rechnungsportal.description",
        version: "0",
        website: "https://documentportal.deutschebahn.com/Logon",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060565.jpg",
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
        entryUrl: "https://documentportal.deutschebahn.com/Logon",
    }

    constructor() {
        super(DeutscheBahnDokumentenAndRechnungsportalCollector.CONFIG);
    }
}
