
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MonsumCollector extends SketchCollector {

    static CONFIG = {
        id: "monsum",
        name: "Monsum",
        description: "i18n.collectors.monsum.description",
        version: "0",
        website: "https://app.monsum.com/index.php?cmd=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20685.jpg",
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
        loginUrl: "https://app.monsum.com/index.php?cmd=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MonsumCollector.CONFIG);
    }
}
