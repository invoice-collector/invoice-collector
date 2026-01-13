
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShellFleethubCollector extends SketchCollector {

    static CONFIG = {
        id: "shell_fleethub",
        name: "Shell Fleethub",
        description: "i18n.collectors.shell_fleethub.description",
        version: "0",
        website: "https://fleethub.shell.com/Invoices/Index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/532457.jpg",
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
        loginUrl: "https://fleethub.shell.com/Invoices/Index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShellFleethubCollector.CONFIG);
    }
}
