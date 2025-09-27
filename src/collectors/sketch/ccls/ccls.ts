
import { SketchCollector } from '../../sketchCollector';

export class CclsCollector extends SketchCollector {

    static CONFIG = {
        id: "ccls",
        name: "CCLS",
        description: "i18n.collectors.ccls.description",
        version: "0",
        website: "https://www.espaceclients.ccls-leasing.fr/espaceclients/initlogin.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153612.jpg",
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
        entryUrl: "https://www.espaceclients.ccls-leasing.fr/espaceclients/initlogin.htm",
    }

    constructor() {
        super(CclsCollector.CONFIG);
    }
}
