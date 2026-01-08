
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CaiwayCollector extends SketchCollector {

    static CONFIG = {
        id: "caiway",
        name: "Caiway",
        description: "i18n.collectors.caiway.description",
        version: "0",
        website: "https://mijn.caiway.nl/general.logOn.logic",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32328.jpg",
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
        loginUrl: "https://mijn.caiway.nl/general.logOn.logic",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CaiwayCollector.CONFIG);
    }
}
