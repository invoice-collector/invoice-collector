
import { SketchCollector } from '../../sketchCollector';

export class AprrAreaCollector extends SketchCollector {

    static CONFIG = {
        id: "aprr_area",
        name: "APRR AREA",
        description: "i18n.collectors.aprr_area.description",
        version: "0",
        website: "https://espaceclient.aprr.fr/aprr/Pages/connexion.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27504.jpg",
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
        entryUrl: "https://espaceclient.aprr.fr/aprr/Pages/connexion.aspx",
    }

    constructor() {
        super(AprrAreaCollector.CONFIG);
    }
}
