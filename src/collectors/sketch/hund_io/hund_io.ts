
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HundIoCollector extends SketchCollector {

    static CONFIG = {
        id: "hund_io",
        name: "Hund.io",
        description: "i18n.collectors.hund_io.description",
        version: "0",
        website: "https://hund.io/client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75996.jpg",
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
        loginUrl: "https://hund.io/client",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HundIoCollector.CONFIG);
    }
}
