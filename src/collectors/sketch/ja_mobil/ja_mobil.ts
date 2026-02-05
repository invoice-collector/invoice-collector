
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JaMobilCollector extends SketchCollector {

    static CONFIG = {
        id: "ja_mobil",
        name: "ja! mobil",
        description: "i18n.collectors.ja_mobil.description",
        version: "0",
        website: "https://jamobil.congstar.de/mein-jamobil/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9413.jpg",
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
        loginUrl: "https://jamobil.congstar.de/mein-jamobil/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JaMobilCollector.CONFIG);
    }
}
