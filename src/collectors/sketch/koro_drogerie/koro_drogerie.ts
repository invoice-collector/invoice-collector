
import { SketchCollector } from '../../sketchCollector';

export class KoroDrogerieCollector extends SketchCollector {

    static CONFIG = {
        id: "koro_drogerie",
        name: "KoRo Drogerie",
        description: "i18n.collectors.koro_drogerie.description",
        version: "0",
        website: "https://www.korodrogerie.de/account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51614.jpg",
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
        entryUrl: "https://www.korodrogerie.de/account/order",
    }

    constructor() {
        super(KoroDrogerieCollector.CONFIG);
    }
}
