
import { SketchCollector } from '../../sketchCollector';

export class Ccm19Collector extends SketchCollector {

    static CONFIG = {
        id: "ccm19",
        name: "CCM19",
        description: "i18n.collectors.ccm19.description",
        version: "0",
        website: "https://www.ccm19.de/account.php?menuid=248&account_extuser=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779012.jpg",
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
        entryUrl: "https://www.ccm19.de/account.php?menuid=248&account_extuser=2",
    }

    constructor() {
        super(Ccm19Collector.CONFIG);
    }
}
