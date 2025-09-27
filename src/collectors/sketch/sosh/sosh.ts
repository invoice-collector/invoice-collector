
import { SketchCollector } from '../../sketchCollector';

export class SoshCollector extends SketchCollector {

    static CONFIG = {
        id: "sosh",
        name: "Sosh",
        description: "i18n.collectors.sosh.description",
        version: "0",
        website: "https://espaceclientv3.orange.fr/?page=factures-accueil",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26981.jpg",
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
        entryUrl: "https://espaceclientv3.orange.fr/?page=factures-accueil",
    }

    constructor() {
        super(SoshCollector.CONFIG);
    }
}
