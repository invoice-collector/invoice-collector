
import { SketchCollector } from '../../sketchCollector';

export class KabilooCollector extends SketchCollector {

    static CONFIG = {
        id: "kabiloo",
        name: "Kabiloo",
        description: "i18n.collectors.kabiloo.description",
        version: "0",
        website: "https://www.kabiloo.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120473.jpg",
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
        entryUrl: "https://www.kabiloo.fr/",
    }

    constructor() {
        super(KabilooCollector.CONFIG);
    }
}
