
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PayplugCollector extends SketchCollector {

    static CONFIG = {
        id: "payplug",
        name: "Payplug",
        description: "i18n.collectors.payplug.description",
        version: "0",
        website: "https://portal.payplug.com/login?_ga=2.195810350.301149794.1561138934-1387182231.1561138934",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137043.jpg",
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
        loginUrl: "https://portal.payplug.com/login?_ga=2.195810350.301149794.1561138934-1387182231.1561138934",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PayplugCollector.CONFIG);
    }
}
