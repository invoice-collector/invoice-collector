
import { SketchCollector } from '../../sketchCollector';

export class BcnTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "bcn_telecom",
        name: "BCN Telecom",
        description: "i18n.collectors.bcn_telecom.description",
        version: "0",
        website: "https://tbs.bcntele.com/v35/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88502.jpg",
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
        entryUrl: "https://tbs.bcntele.com/v35/Login.aspx",
    }

    constructor() {
        super(BcnTelecomCollector.CONFIG);
    }
}
