
import { SketchCollector } from '../../sketchCollector';

export class WpeverestCollector extends SketchCollector {

    static CONFIG = {
        id: "wpeverest",
        name: "WPEverest",
        description: "i18n.collectors.wpeverest.description",
        version: "0",
        website: "https://wpeverest.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2106045.jpg",
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
        entryUrl: "https://wpeverest.com/my-account/",
    }

    constructor() {
        super(WpeverestCollector.CONFIG);
    }
}
