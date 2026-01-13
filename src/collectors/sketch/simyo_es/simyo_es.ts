
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SimyoEsCollector extends SketchCollector {

    static CONFIG = {
        id: "simyo_es",
        name: "Simyo (.es)",
        description: "i18n.collectors.simyo_es.description",
        version: "0",
        website: "https://www.simyo.es",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1126183.jpg",
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
        loginUrl: "https://www.simyo.es",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimyoEsCollector.CONFIG);
    }
}
