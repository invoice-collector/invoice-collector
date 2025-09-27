
import { SketchCollector } from '../../sketchCollector';

export class LogiwayCollector extends SketchCollector {

    static CONFIG = {
        id: "logiway",
        name: "logiway",
        description: "i18n.collectors.logiway.description",
        version: "0",
        website: "https://www.logiway.de/shop/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/842041.jpg",
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
        entryUrl: "https://www.logiway.de/shop/account",
    }

    constructor() {
        super(LogiwayCollector.CONFIG);
    }
}
