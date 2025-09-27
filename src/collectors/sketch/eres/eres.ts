
import { SketchCollector } from '../../sketchCollector';

export class EresCollector extends SketchCollector {

    static CONFIG = {
        id: "eres",
        name: "Eres",
        description: "i18n.collectors.eres.description",
        version: "0",
        website: "https://www.eresparis.com/eu/en/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778809.jpg",
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
        entryUrl: "https://www.eresparis.com/eu/en/home",
    }

    constructor() {
        super(EresCollector.CONFIG);
    }
}
