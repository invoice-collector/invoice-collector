
import { SketchCollector } from '../../sketchCollector';

export class RumsMsCollector extends SketchCollector {

    static CONFIG = {
        id: "rums_ms",
        name: "Rums.ms",
        description: "i18n.collectors.rums_ms.description",
        version: "0",
        website: "https://www.rums.ms/profil/abonnements/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1723348.jpg",
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
        entryUrl: "https://www.rums.ms/profil/abonnements/",
    }

    constructor() {
        super(RumsMsCollector.CONFIG);
    }
}
