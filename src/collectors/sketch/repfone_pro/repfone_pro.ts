
import { SketchCollector } from '../../sketchCollector';

export class RepfoneProCollector extends SketchCollector {

    static CONFIG = {
        id: "repfone_pro",
        name: "REPFONE Pro",
        description: "i18n.collectors.repfone_pro.description",
        version: "0",
        website: "https://repfonepro.fr/index.php?controller=authentication&back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526276.jpg",
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
        entryUrl: "https://repfonepro.fr/index.php?controller=authentication&back=my-account",
    }

    constructor() {
        super(RepfoneProCollector.CONFIG);
    }
}
