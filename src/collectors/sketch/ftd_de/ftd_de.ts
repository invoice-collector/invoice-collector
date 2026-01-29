
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FtdDeCollector extends SketchCollector {

    static CONFIG = {
        id: "ftd_de",
        name: "ftd.de",
        description: "i18n.collectors.ftd_de.description",
        version: "0",
        website: "https://www.ftd.de/kommtnurnachlogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/846097.jpg",
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
        loginUrl: "https://www.ftd.de/kommtnurnachlogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FtdDeCollector.CONFIG);
    }
}
