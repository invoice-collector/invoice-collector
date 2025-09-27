
import { SketchCollector } from '../../sketchCollector';

export class LightingseoCollector extends SketchCollector {

    static CONFIG = {
        id: "lightingseo",
        name: "Lightingseo",
        description: "i18n.collectors.lightingseo.description",
        version: "0",
        website: "https://www.lightingseo.com/fr/user/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/429787.jpg",
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
        entryUrl: "https://www.lightingseo.com/fr/user/billing",
    }

    constructor() {
        super(LightingseoCollector.CONFIG);
    }
}
