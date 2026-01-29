
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ClsMedCollector extends SketchCollector {

    static CONFIG = {
        id: "cls_med",
        name: "CLS-med",
        description: "i18n.collectors.cls_med.description",
        version: "0",
        website: "https://www.cls-med.de/login.php?MODsid=7b3c779e52b77d562ec1b5be1832ba33",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747331.jpg",
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
        loginUrl: "https://www.cls-med.de/login.php?MODsid=7b3c779e52b77d562ec1b5be1832ba33",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ClsMedCollector.CONFIG);
    }
}
