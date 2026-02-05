
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HdCollector extends SketchCollector {

    static CONFIG = {
        id: "hd",
        name: "HD+",
        description: "i18n.collectors.hd.description",
        version: "0",
        website: "https://www.hd-plus.de/mein-hd-plus",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9153.jpg",
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
        loginUrl: "https://www.hd-plus.de/mein-hd-plus",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HdCollector.CONFIG);
    }
}
