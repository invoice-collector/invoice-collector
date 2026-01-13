
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IoncubeCollector extends SketchCollector {

    static CONFIG = {
        id: "ioncube",
        name: "ionCube",
        description: "i18n.collectors.ioncube.description",
        version: "0",
        website: "https://www.ioncube.com/main.php?c=account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/453.jpg",
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
        loginUrl: "https://www.ioncube.com/main.php?c=account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IoncubeCollector.CONFIG);
    }
}
