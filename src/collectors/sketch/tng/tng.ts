
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TngCollector extends SketchCollector {

    static CONFIG = {
        id: "tng",
        name: "TNG",
        description: "i18n.collectors.tng.description",
        version: "0",
        website: "https://www.mytng.de/group/mytng/mein-vertrag/rechnungsarchiv",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9211.jpg",
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
        loginUrl: "https://www.mytng.de/group/mytng/mein-vertrag/rechnungsarchiv",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TngCollector.CONFIG);
    }
}
