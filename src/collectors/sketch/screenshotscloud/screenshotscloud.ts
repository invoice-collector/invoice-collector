
import { SketchCollector } from '../../sketchCollector';

export class ScreenshotscloudCollector extends SketchCollector {

    static CONFIG = {
        id: "screenshotscloud",
        name: "ScreenshotsCloud",
        description: "i18n.collectors.screenshotscloud.description",
        version: "0",
        website: "https://screenshots.cloud/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203077.jpg",
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
        entryUrl: "https://screenshots.cloud/dashboard",
    }

    constructor() {
        super(ScreenshotscloudCollector.CONFIG);
    }
}
