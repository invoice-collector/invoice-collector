
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UptimeRobotCollector extends SketchCollector {

    static CONFIG = {
        id: "uptime_robot",
        name: "Uptime Robot",
        description: "i18n.collectors.uptime_robot.description",
        version: "0",
        website: "https://uptimerobot.com/dashboard.php#mySettings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33773.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://uptimerobot.com/dashboard.php#mySettings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UptimeRobotCollector.CONFIG);
    }
}
