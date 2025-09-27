
import { SketchCollector } from '../../sketchCollector';

export class LomaxCollector extends SketchCollector {

    static CONFIG = {
        id: "lomax",
        name: "Lomax",
        description: "i18n.collectors.lomax.description",
        version: "0",
        website: "https://www.lomax.dk/min-konto/fakturaer/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202498.jpg",
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
        entryUrl: "https://www.lomax.dk/min-konto/fakturaer/",
    }

    constructor() {
        super(LomaxCollector.CONFIG);
    }
}
