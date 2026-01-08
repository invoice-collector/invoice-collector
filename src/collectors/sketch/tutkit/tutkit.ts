
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TutkitCollector extends SketchCollector {

    static CONFIG = {
        id: "tutkit",
        name: "Tutkit",
        description: "i18n.collectors.tutkit.description",
        version: "0",
        website: "https://www.tutkit.com/de/mein-konto/lizenz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1722891.jpg",
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
        loginUrl: "https://www.tutkit.com/de/mein-konto/lizenz",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TutkitCollector.CONFIG);
    }
}
