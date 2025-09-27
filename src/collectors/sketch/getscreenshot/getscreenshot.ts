
import { SketchCollector } from '../../sketchCollector';

export class GetscreenshotCollector extends SketchCollector {

    static CONFIG = {
        id: "getscreenshot",
        name: "GetScreenshot",
        description: "i18n.collectors.getscreenshot.description",
        version: "0",
        website: "https://www.getscreenshotapi.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1426101.jpg",
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
        entryUrl: "https://www.getscreenshotapi.com/account",
    }

    constructor() {
        super(GetscreenshotCollector.CONFIG);
    }
}
