
import { SketchCollector } from '../../sketchCollector';

export class LuckyregisterCollector extends SketchCollector {

    static CONFIG = {
        id: "luckyregister",
        name: "LuckyRegister",
        description: "i18n.collectors.luckyregister.description",
        version: "0",
        website: "https://sso.secureserver.net/login?plid=103615&prog_id=Luckyregister&realm=idp&path=%2Fproducts&app=account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131271.jpg",
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
        entryUrl: "https://sso.secureserver.net/login?plid=103615&prog_id=Luckyregister&realm=idp&path=%2Fproducts&app=account",
    }

    constructor() {
        super(LuckyregisterCollector.CONFIG);
    }
}
