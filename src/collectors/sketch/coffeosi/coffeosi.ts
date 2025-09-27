
import { SketchCollector } from '../../sketchCollector';

export class CoffeosiCollector extends SketchCollector {

    static CONFIG = {
        id: "coffeosi",
        name: "Coffeosi",
        description: "i18n.collectors.coffeosi.description",
        version: "0",
        website: "https://coffeosi.com/kasse",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4189028.jpg",
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
        entryUrl: "https://coffeosi.com/kasse",
    }

    constructor() {
        super(CoffeosiCollector.CONFIG);
    }
}
