
import { SketchCollector } from '../../sketchCollector';

export class ScreenshotlayerCollector extends SketchCollector {

    static CONFIG = {
        id: "screenshotlayer",
        name: "ScreensHotLayer",
        description: "i18n.collectors.screenshotlayer.description",
        version: "0",
        website: "https://screenshotlayer.com/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185151.jpg",
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
        entryUrl: "https://screenshotlayer.com/payment",
    }

    constructor() {
        super(ScreenshotlayerCollector.CONFIG);
    }
}
