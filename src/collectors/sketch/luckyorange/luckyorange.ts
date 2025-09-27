
import { SketchCollector } from '../../sketchCollector';

export class LuckyorangeCollector extends SketchCollector {

    static CONFIG = {
        id: "luckyorange",
        name: "luckyorange",
        description: "i18n.collectors.luckyorange.description",
        version: "0",
        website: "http://www.luckyorange.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7158.jpg",
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
        entryUrl: "http://www.luckyorange.com/login.php",
    }

    constructor() {
        super(LuckyorangeCollector.CONFIG);
    }
}
