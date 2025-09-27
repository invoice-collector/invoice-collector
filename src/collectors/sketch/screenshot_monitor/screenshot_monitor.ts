
import { SketchCollector } from '../../sketchCollector';

export class ScreenshotMonitorCollector extends SketchCollector {

    static CONFIG = {
        id: "screenshot_monitor",
        name: "Screenshot Monitor",
        description: "i18n.collectors.screenshot_monitor.description",
        version: "0",
        website: "https://screenshotmonitor.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33197.jpg",
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
        entryUrl: "https://screenshotmonitor.com/login",
    }

    constructor() {
        super(ScreenshotMonitorCollector.CONFIG);
    }
}
