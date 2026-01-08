
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WpRocketReseller2021Collector extends SketchCollector {

    static CONFIG = {
        id: "wp_rocket_reseller_2021",
        name: "WP Rocket Reseller 2021",
        description: "i18n.collectors.wp_rocket_reseller_2021.description",
        version: "0",
        website: "https://wprocket.hpress.de/dashboard.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778004.jpg",
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
        loginUrl: "https://wprocket.hpress.de/dashboard.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WpRocketReseller2021Collector.CONFIG);
    }
}
