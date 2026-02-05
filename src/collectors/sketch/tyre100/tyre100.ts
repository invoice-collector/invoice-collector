
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Tyre100Collector extends SketchCollector {

    static CONFIG = {
        id: "tyre100",
        name: "Tyre100",
        description: "i18n.collectors.tyre100.description",
        version: "0",
        website: "https://www.tyre100.de/de-DE/Account/Login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746516.jpg",
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
        loginUrl: "https://www.tyre100.de/de-DE/Account/Login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Tyre100Collector.CONFIG);
    }
}
