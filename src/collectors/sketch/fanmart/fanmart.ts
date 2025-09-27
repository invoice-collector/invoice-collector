
import { SketchCollector } from '../../sketchCollector';

export class FanmartCollector extends SketchCollector {

    static CONFIG = {
        id: "fanmart",
        name: "Fanmart",
        description: "i18n.collectors.fanmart.description",
        version: "0",
        website: "http://www.fanmart.de/kunden-login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60433.jpg",
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
        entryUrl: "http://www.fanmart.de/kunden-login",
    }

    constructor() {
        super(FanmartCollector.CONFIG);
    }
}
