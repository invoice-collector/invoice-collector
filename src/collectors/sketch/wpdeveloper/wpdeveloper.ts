
import { SketchCollector } from '../../sketchCollector';

export class WpdeveloperCollector extends SketchCollector {

    static CONFIG = {
        id: "wpdeveloper",
        name: "WPDeveloper",
        description: "i18n.collectors.wpdeveloper.description",
        version: "0",
        website: "https://wpdeveloper.net/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762252.jpg",
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
        entryUrl: "https://wpdeveloper.net/login/",
    }

    constructor() {
        super(WpdeveloperCollector.CONFIG);
    }
}
