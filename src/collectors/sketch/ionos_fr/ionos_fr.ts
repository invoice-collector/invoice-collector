
import { SketchCollector } from '../../sketchCollector';

export class IonosFrCollector extends SketchCollector {

    static CONFIG = {
        id: "ionos_fr",
        name: "Ionos (.fr)",
        description: "i18n.collectors.ionos_fr.description",
        version: "0",
        website: "https://login.ionos.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121682.jpg",
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
        entryUrl: "https://login.ionos.fr/",
    }

    constructor() {
        super(IonosFrCollector.CONFIG);
    }
}
