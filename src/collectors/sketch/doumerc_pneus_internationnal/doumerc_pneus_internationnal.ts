
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DoumercPneusInternationnalCollector extends SketchCollector {

    static CONFIG = {
        id: "doumerc_pneus_internationnal",
        name: "Doumerc Pneus Internationnal",
        description: "i18n.collectors.doumerc_pneus_internationnal.description",
        version: "0",
        website: "https://www.doumercpneus.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118638.jpg",
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
        loginUrl: "https://www.doumercpneus.net/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DoumercPneusInternationnalCollector.CONFIG);
    }
}
