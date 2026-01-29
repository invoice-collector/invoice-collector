
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ToolsetCollector extends SketchCollector {

    static CONFIG = {
        id: "toolset",
        name: "Toolset",
        description: "i18n.collectors.toolset.description",
        version: "0",
        website: "https://toolset.com/log-in/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/816594.jpg",
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
        loginUrl: "https://toolset.com/log-in/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ToolsetCollector.CONFIG);
    }
}
