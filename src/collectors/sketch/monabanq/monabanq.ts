
import { SketchCollector } from '../../sketchCollector';

export class MonabanqCollector extends SketchCollector {

    static CONFIG = {
        id: "monabanq",
        name: "Monabanq",
        description: "i18n.collectors.monabanq.description",
        version: "0",
        website: "https://www.monabanq.com/fr/identification/authentification.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115988.jpg",
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
        entryUrl: "https://www.monabanq.com/fr/identification/authentification.html",
    }

    constructor() {
        super(MonabanqCollector.CONFIG);
    }
}
