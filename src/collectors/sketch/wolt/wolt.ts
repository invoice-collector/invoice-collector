
import { SketchCollector } from '../../sketchCollector';

export class WoltCollector extends SketchCollector {

    static CONFIG = {
        id: "wolt",
        name: "Wolt",
        description: "i18n.collectors.wolt.description",
        version: "0",
        website: "https://wolt.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/863414.jpg",
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
        entryUrl: "https://wolt.com/",
    }

    constructor() {
        super(WoltCollector.CONFIG);
    }
}
