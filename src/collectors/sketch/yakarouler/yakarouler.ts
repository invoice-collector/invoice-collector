
import { SketchCollector } from '../../sketchCollector';

export class YakaroulerCollector extends SketchCollector {

    static CONFIG = {
        id: "yakarouler",
        name: "Yakarouler",
        description: "i18n.collectors.yakarouler.description",
        version: "0",
        website: "https://www.yakarouler.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124015.jpg",
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
        entryUrl: "https://www.yakarouler.com/",
    }

    constructor() {
        super(YakaroulerCollector.CONFIG);
    }
}
