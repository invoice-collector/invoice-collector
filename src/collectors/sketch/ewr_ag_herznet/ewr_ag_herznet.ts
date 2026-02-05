
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EwrAgHerznetCollector extends SketchCollector {

    static CONFIG = {
        id: "ewr_ag_herznet",
        name: "EWR AG - Herznet",
        description: "i18n.collectors.ewr_ag_herznet.description",
        version: "0",
        website: "https://mein.ewr-internett.de/Default.asp?rq_Lang=de#{2}",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153907.jpg",
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
        loginUrl: "https://mein.ewr-internett.de/Default.asp?rq_Lang=de#{2}",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EwrAgHerznetCollector.CONFIG);
    }
}
