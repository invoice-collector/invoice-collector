
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DigiposteCollector extends SketchCollector {

    static CONFIG = {
        id: "digiposte",
        name: "digiposte",
        description: "i18n.collectors.digiposte.description",
        version: "0",
        website: "https://secure.digiposte.fr/safe/940880c8c8504c019150b676723f2315",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1275481.jpg",
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
        loginUrl: "https://secure.digiposte.fr/safe/940880c8c8504c019150b676723f2315",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigiposteCollector.CONFIG);
    }
}
