
import { SketchCollector } from '../../sketchCollector';

export class AvivashoppingDeCollector extends SketchCollector {

    static CONFIG = {
        id: "avivashopping_de",
        name: "Avivashopping.de",
        description: "i18n.collectors.avivashopping_de.description",
        version: "0",
        website: "https://www.avivamed.de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1217605.jpg",
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
        entryUrl: "https://www.avivamed.de/account/login",
    }

    constructor() {
        super(AvivashoppingDeCollector.CONFIG);
    }
}
