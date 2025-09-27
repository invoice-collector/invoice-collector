
import { SketchCollector } from '../../sketchCollector';

export class KotelCollector extends SketchCollector {

    static CONFIG = {
        id: "kotel",
        name: "Kotel",
        description: "i18n.collectors.kotel.description",
        version: "0",
        website: "https://www.zoozzy.de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9517.jpg",
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
        entryUrl: "https://www.zoozzy.de/account/login",
    }

    constructor() {
        super(KotelCollector.CONFIG);
    }
}
