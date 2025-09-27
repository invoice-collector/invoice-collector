
import { SketchCollector } from '../../sketchCollector';

export class YourhostingCollector extends SketchCollector {

    static CONFIG = {
        id: "yourhosting",
        name: "Yourhosting",
        description: "i18n.collectors.yourhosting.description",
        version: "0",
        website: "https://www.yourhosting.nl/login/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9487.jpg",
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
        entryUrl: "https://www.yourhosting.nl/login/login.html",
    }

    constructor() {
        super(YourhostingCollector.CONFIG);
    }
}
