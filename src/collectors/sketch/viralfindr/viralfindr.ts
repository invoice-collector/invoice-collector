
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ViralfindrCollector extends SketchCollector {

    static CONFIG = {
        id: "viralfindr",
        name: "Viralfindr",
        description: "i18n.collectors.viralfindr.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xOURaTkhBTk9iWjVvNURqLF9OZjhDQ0JPWGE3OER4blZCemhJNEdPUTN0VDZ1b05O0100SJhZ4lI2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881986.jpg",
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
        loginUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xOURaTkhBTk9iWjVvNURqLF9OZjhDQ0JPWGE3OER4blZCemhJNEdPUTN0VDZ1b05O0100SJhZ4lI2",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ViralfindrCollector.CONFIG);
    }
}
