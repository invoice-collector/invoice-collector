
import { SketchCollector } from '../../sketchCollector';

export class WufooCollector extends SketchCollector {

    static CONFIG = {
        id: "wufoo",
        name: "Wufoo",
        description: "i18n.collectors.wufoo.description",
        version: "0",
        website: "https://secure.wufoo.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2256.jpg",
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
        entryUrl: "https://secure.wufoo.com/login/",
    }

    constructor() {
        super(WufooCollector.CONFIG);
    }
}
