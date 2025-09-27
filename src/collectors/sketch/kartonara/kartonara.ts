
import { SketchCollector } from '../../sketchCollector';

export class KartonaraCollector extends SketchCollector {

    static CONFIG = {
        id: "kartonara",
        name: "Kartonara",
        description: "i18n.collectors.kartonara.description",
        version: "0",
        website: "http://www.kartonara.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108011.jpg",
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
        entryUrl: "http://www.kartonara.de",
    }

    constructor() {
        super(KartonaraCollector.CONFIG);
    }
}
