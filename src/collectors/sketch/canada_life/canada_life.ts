
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CanadaLifeCollector extends SketchCollector {

    static CONFIG = {
        id: "canada_life",
        name: "Canada Life",
        description: "i18n.collectors.canada_life.description",
        version: "0",
        website: "https://partnernet.canadalife.de/selfcare/CleAdvisorLoginSelfCare/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115650.jpg",
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
        loginUrl: "https://partnernet.canadalife.de/selfcare/CleAdvisorLoginSelfCare/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CanadaLifeCollector.CONFIG);
    }
}
