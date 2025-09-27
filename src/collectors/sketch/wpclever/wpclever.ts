
import { SketchCollector } from '../../sketchCollector';

export class WpcleverCollector extends SketchCollector {

    static CONFIG = {
        id: "wpclever",
        name: "WPClever",
        description: "i18n.collectors.wpclever.description",
        version: "0",
        website: "https://wpclever.net/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1349417.jpg",
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
        entryUrl: "https://wpclever.net/my-account",
    }

    constructor() {
        super(WpcleverCollector.CONFIG);
    }
}
