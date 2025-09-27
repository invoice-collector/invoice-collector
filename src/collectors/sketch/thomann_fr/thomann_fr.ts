
import { SketchCollector } from '../../sketchCollector';

export class ThomannFrCollector extends SketchCollector {

    static CONFIG = {
        id: "thomann_fr",
        name: "Thomann.fr",
        description: "i18n.collectors.thomann_fr.description",
        version: "0",
        website: "https://www.thomann.de/fr/mythomann_login.html?o=https://www.thomann.de/fr/mythomann.html?sid=b4463a701f069547968a1922ba133225",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123497.jpg",
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
        entryUrl: "https://www.thomann.de/fr/mythomann_login.html?o=https://www.thomann.de/fr/mythomann.html?sid=b4463a701f069547968a1922ba133225",
    }

    constructor() {
        super(ThomannFrCollector.CONFIG);
    }
}
