
import { SketchCollector } from '../../sketchCollector';

export class WbMasonCollector extends SketchCollector {

    static CONFIG = {
        id: "wb_mason",
        name: "WB Mason",
        description: "i18n.collectors.wb_mason.description",
        version: "0",
        website: "https://www.wbmason.com/Login2.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382672.jpg",
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
        entryUrl: "https://www.wbmason.com/Login2.aspx",
    }

    constructor() {
        super(WbMasonCollector.CONFIG);
    }
}
