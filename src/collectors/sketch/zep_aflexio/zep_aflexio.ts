
import { SketchCollector } from '../../sketchCollector';

export class ZepAflexioCollector extends SketchCollector {

    static CONFIG = {
        id: "zep_aflexio",
        name: "ZEP aflexio",
        description: "i18n.collectors.zep_aflexio.description",
        version: "0",
        website: "https://www.zep-online.de/zepaflexiocom/view/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863326.jpg",
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
        entryUrl: "https://www.zep-online.de/zepaflexiocom/view/login.php",
    }

    constructor() {
        super(ZepAflexioCollector.CONFIG);
    }
}
