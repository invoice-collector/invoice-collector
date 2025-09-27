
import { SketchCollector } from '../../sketchCollector';

export class LkgLausitzerKabelbetriebsgesellschaftMbhCollector extends SketchCollector {

    static CONFIG = {
        id: "lkg_lausitzer_kabelbetriebsgesellschaft_mbh",
        name: "LKG - Lausitzer Kabelbetriebsgesellschaft mbH",
        description: "i18n.collectors.lkg_lausitzer_kabelbetriebsgesellschaft_mbh.description",
        version: "0",
        website: "https://lkg.kabelkundenservice.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1241020.jpg",
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
        entryUrl: "https://lkg.kabelkundenservice.de/login.php",
    }

    constructor() {
        super(LkgLausitzerKabelbetriebsgesellschaftMbhCollector.CONFIG);
    }
}
