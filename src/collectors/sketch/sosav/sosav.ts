
import { SketchCollector } from '../../sketchCollector';

export class SosavCollector extends SketchCollector {

    static CONFIG = {
        id: "sosav",
        name: "SOSav",
        description: "i18n.collectors.sosav.description",
        version: "0",
        website: "https://www.sosav.fr/store/historique-commandes#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2792849.jpg",
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
        entryUrl: "https://www.sosav.fr/store/historique-commandes#",
    }

    constructor() {
        super(SosavCollector.CONFIG);
    }
}
