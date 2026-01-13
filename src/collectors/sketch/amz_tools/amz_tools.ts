
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmzToolsCollector extends SketchCollector {

    static CONFIG = {
        id: "amz_tools",
        name: "AMZ TOOLS",
        description: "i18n.collectors.amz_tools.description",
        version: "0",
        website: "https://amz.tools/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/922922.jpg",
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
        loginUrl: "https://amz.tools/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmzToolsCollector.CONFIG);
    }
}
