
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IonosDeCollector extends SketchCollector {

    static CONFIG = {
        id: "ionos_de",
        name: "Ionos (.de)",
        description: "i18n.collectors.ionos_de.description",
        version: "0",
        website: "https://login.ionos.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/86018.jpg",
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
        loginUrl: "https://login.ionos.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IonosDeCollector.CONFIG);
    }
}
