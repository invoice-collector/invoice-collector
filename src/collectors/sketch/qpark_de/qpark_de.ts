
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class QparkDeCollector extends SketchCollector {

    static CONFIG = {
        id: "qpark_de",
        name: "Qpark.de",
        description: "i18n.collectors.qpark_de.description",
        version: "0",
        website: "https://www.q-park.de/de-de/myqpark/mein-q-park/meine-rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20522.jpg",
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
        loginUrl: "https://www.q-park.de/de-de/myqpark/mein-q-park/meine-rechnungen/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(QparkDeCollector.CONFIG);
    }
}
