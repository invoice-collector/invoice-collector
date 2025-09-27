
import { SketchCollector } from '../../sketchCollector';

export class EngieProCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_pro",
        name: "ENGIE PRO",
        description: "i18n.collectors.engie_pro.description",
        version: "0",
        website: "https://espace-client.pro.engie.fr/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197654.jpg",
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
        entryUrl: "https://espace-client.pro.engie.fr/mes-factures",
    }

    constructor() {
        super(EngieProCollector.CONFIG);
    }
}
