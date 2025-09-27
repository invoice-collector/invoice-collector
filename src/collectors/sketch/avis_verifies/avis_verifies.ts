
import { SketchCollector } from '../../sketchCollector';

export class AvisVerifiesCollector extends SketchCollector {

    static CONFIG = {
        id: "avis_verifies",
        name: "Avis Verifies",
        description: "i18n.collectors.avis_verifies.description",
        version: "0",
        website: "https://www.avis-verifies.com/index.php?page=mod_info_banque",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131142.jpg",
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
        entryUrl: "https://www.avis-verifies.com/index.php?page=mod_info_banque",
    }

    constructor() {
        super(AvisVerifiesCollector.CONFIG);
    }
}
