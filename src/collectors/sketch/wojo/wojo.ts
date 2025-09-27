
import { SketchCollector } from '../../sketchCollector';

export class WojoCollector extends SketchCollector {

    static CONFIG = {
        id: "wojo",
        name: "Wojo",
        description: "i18n.collectors.wojo.description",
        version: "0",
        website: "https://www.wojo.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1438881.jpg",
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
        entryUrl: "https://www.wojo.com/",
    }

    constructor() {
        super(WojoCollector.CONFIG);
    }
}
