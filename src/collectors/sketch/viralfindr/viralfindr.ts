
import { SketchCollector } from '../../sketchCollector';

export class ViralfindrCollector extends SketchCollector {

    static CONFIG = {
        id: "viralfindr",
        name: "Viralfindr",
        description: "i18n.collectors.viralfindr.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xOURaTkhBTk9iWjVvNURqLF9OZjhDQ0JPWGE3OER4blZCemhJNEdPUTN0VDZ1b05O0100SJhZ4lI2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881986.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xOURaTkhBTk9iWjVvNURqLF9OZjhDQ0JPWGE3OER4blZCemhJNEdPUTN0VDZ1b05O0100SJhZ4lI2",
    }

    constructor() {
        super(ViralfindrCollector.CONFIG);
    }
}
