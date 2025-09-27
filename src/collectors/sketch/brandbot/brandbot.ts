
import { SketchCollector } from '../../sketchCollector';

export class BrandbotCollector extends SketchCollector {

    static CONFIG = {
        id: "brandbot",
        name: "Brandbot",
        description: "i18n.collectors.brandbot.description",
        version: "0",
        website: "https://marketing-automation.xplorapps.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842112.jpg",
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
        entryUrl: "https://marketing-automation.xplorapps.io/login",
    }

    constructor() {
        super(BrandbotCollector.CONFIG);
    }
}
