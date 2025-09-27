
import { SketchCollector } from '../../sketchCollector';

export class LunarpagesCollector extends SketchCollector {

    static CONFIG = {
        id: "lunarpages",
        name: "Lunarpages",
        description: "i18n.collectors.lunarpages.description",
        version: "0",
        website: "https://account.lunarpages.com/login.php?ref=L2luZGV4LnBocA%3D%3D",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8981.jpg",
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
        entryUrl: "https://account.lunarpages.com/login.php?ref=L2luZGV4LnBocA%3D%3D",
    }

    constructor() {
        super(LunarpagesCollector.CONFIG);
    }
}
