
import { SketchCollector } from '../../sketchCollector';

export class PatriwineCollector extends SketchCollector {

    static CONFIG = {
        id: "patriwine",
        name: "PatriWine",
        description: "i18n.collectors.patriwine.description",
        version: "0",
        website: "https://www.patriwine.fr/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115881.jpg",
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
        entryUrl: "https://www.patriwine.fr/connexion?back=my-account",
    }

    constructor() {
        super(PatriwineCollector.CONFIG);
    }
}
