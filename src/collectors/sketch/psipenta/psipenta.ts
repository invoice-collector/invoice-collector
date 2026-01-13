
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PsipentaCollector extends SketchCollector {

    static CONFIG = {
        id: "psipenta",
        name: "PSIPENTA",
        description: "i18n.collectors.psipenta.description",
        version: "0",
        website: "http://www.psipenta.de/de/home/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/555.jpg",
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
        loginUrl: "http://www.psipenta.de/de/home/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PsipentaCollector.CONFIG);
    }
}
