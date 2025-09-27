
import { SketchCollector } from '../../sketchCollector';

export class KiwiComCollector extends SketchCollector {

    static CONFIG = {
        id: "kiwi_com",
        name: "Kiwi.com",
        description: "i18n.collectors.kiwi_com.description",
        version: "0",
        website: "http://www.kiwi.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77693.jpg",
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
        entryUrl: "http://www.kiwi.com",
    }

    constructor() {
        super(KiwiComCollector.CONFIG);
    }
}
