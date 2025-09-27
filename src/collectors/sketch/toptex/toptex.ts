
import { SketchCollector } from '../../sketchCollector';

export class ToptexCollector extends SketchCollector {

    static CONFIG = {
        id: "toptex",
        name: "Toptex",
        description: "i18n.collectors.toptex.description",
        version: "0",
        website: "https://www.toptex.com/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040984.jpg",
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
        entryUrl: "https://www.toptex.com/customer/account/login/",
    }

    constructor() {
        super(ToptexCollector.CONFIG);
    }
}
