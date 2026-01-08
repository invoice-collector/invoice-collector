
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TailscaleCollector extends SketchCollector {

    static CONFIG = {
        id: "tailscale",
        name: "Tailscale",
        description: "i18n.collectors.tailscale.description",
        version: "0",
        website: "https://login.tailscale.com/login?next_url=%2Fwelcome%3F_gl%3D1%2A1p31e9l%2A_ga%2AMzE2MDg0MzAzLjE2NzE4NzY5MDk.%2A_ga_JY69R9X5MQ%2AMTY3MTg3NjkwOC4xLjEuMTY3MTg3NjkwOS41OS4wLjA.",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1616497.jpg",
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
        loginUrl: "https://login.tailscale.com/login?next_url=%2Fwelcome%3F_gl%3D1%2A1p31e9l%2A_ga%2AMzE2MDg0MzAzLjE2NzE4NzY5MDk.%2A_ga_JY69R9X5MQ%2AMTY3MTg3NjkwOC4xLjEuMTY3MTg3NjkwOS41OS4wLjA.",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TailscaleCollector.CONFIG);
    }
}
