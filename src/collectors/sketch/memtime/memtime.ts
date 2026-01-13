
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MemtimeCollector extends SketchCollector {

    static CONFIG = {
        id: "memtime",
        name: "Memtime",
        description: "i18n.collectors.memtime.description",
        version: "0",
        website: "https://portal.memtime.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200049.jpg",
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
        loginUrl: "https://portal.memtime.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MemtimeCollector.CONFIG);
    }
}
