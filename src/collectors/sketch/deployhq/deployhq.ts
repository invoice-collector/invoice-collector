
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeployhqCollector extends SketchCollector {

    static CONFIG = {
        id: "deployhq",
        name: "DeployHQ",
        description: "i18n.collectors.deployhq.description",
        version: "0",
        website: "https://identity.atechmedia.com/login/deploy",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52301.jpg",
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
        loginUrl: "https://identity.atechmedia.com/login/deploy",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeployhqCollector.CONFIG);
    }
}
