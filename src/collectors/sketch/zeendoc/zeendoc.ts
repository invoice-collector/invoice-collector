
import { SketchCollector } from '../../sketchCollector';

export class ZeendocCollector extends SketchCollector {

    static CONFIG = {
        id: "zeendoc",
        name: "Zeendoc",
        description: "i18n.collectors.zeendoc.description",
        version: "0",
        website: "https://armoires.zeendoc.com/_Login/Login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4514424.jpg",
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
        entryUrl: "https://armoires.zeendoc.com/_Login/Login.php",
    }

    constructor() {
        super(ZeendocCollector.CONFIG);
    }
}
