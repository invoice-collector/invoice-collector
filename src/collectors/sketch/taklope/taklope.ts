
import { SketchCollector } from '../../sketchCollector';

export class TaklopeCollector extends SketchCollector {

    static CONFIG = {
        id: "taklope",
        name: "Taklope",
        description: "i18n.collectors.taklope.description",
        version: "0",
        website: "https://www.taklope.com/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123502.jpg",
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
        entryUrl: "https://www.taklope.com/authentification?back=my-account",
    }

    constructor() {
        super(TaklopeCollector.CONFIG);
    }
}
