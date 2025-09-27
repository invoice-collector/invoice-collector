
import { SketchCollector } from '../../sketchCollector';

export class NafiCollector extends SketchCollector {

    static CONFIG = {
        id: "nafi",
        name: "NAFI",
        description: "i18n.collectors.nafi.description",
        version: "0",
        website: "https://portal.nafi.de/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409626.jpg",
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
        entryUrl: "https://portal.nafi.de/Account/Login",
    }

    constructor() {
        super(NafiCollector.CONFIG);
    }
}
