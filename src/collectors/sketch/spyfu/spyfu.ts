
import { SketchCollector } from '../../sketchCollector';

export class SpyfuCollector extends SketchCollector {

    static CONFIG = {
        id: "spyfu",
        name: "SpyFu",
        description: "i18n.collectors.spyfu.description",
        version: "0",
        website: "https://www.spyfu.com/account/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1361539.jpg",
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
        entryUrl: "https://www.spyfu.com/account/receipts",
    }

    constructor() {
        super(SpyfuCollector.CONFIG);
    }
}
