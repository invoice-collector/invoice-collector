
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TessolCollector extends SketchCollector {

    static CONFIG = {
        id: "tessol",
        name: "Tessol",
        description: "i18n.collectors.tessol.description",
        version: "0",
        website: "https://portal.tessol.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778129.jpg",
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
        loginUrl: "https://portal.tessol.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TessolCollector.CONFIG);
    }
}
