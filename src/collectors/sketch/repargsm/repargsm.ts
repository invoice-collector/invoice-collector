
import { SketchCollector } from '../../sketchCollector';

export class RepargsmCollector extends SketchCollector {

    static CONFIG = {
        id: "repargsm",
        name: "REPARGSM",
        description: "i18n.collectors.repargsm.description",
        version: "0",
        website: "https://repargsm.com/fr/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1525152.jpg",
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
        entryUrl: "https://repargsm.com/fr/connexion?back=my-account",
    }

    constructor() {
        super(RepargsmCollector.CONFIG);
    }
}
