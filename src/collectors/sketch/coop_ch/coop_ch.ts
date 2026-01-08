
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CoopChCollector extends SketchCollector {

    static CONFIG = {
        id: "coop_ch",
        name: "coop.ch",
        description: "i18n.collectors.coop_ch.description",
        version: "0",
        website: "https://www.coop.ch/de/my-orders?sortOrder=date&page=3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284741.jpg",
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
        loginUrl: "https://www.coop.ch/de/my-orders?sortOrder=date&page=3",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoopChCollector.CONFIG);
    }
}
