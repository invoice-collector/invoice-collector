
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TopvisorCollector extends SketchCollector {

    static CONFIG = {
        id: "topvisor",
        name: "Topvisor",
        description: "i18n.collectors.topvisor.description",
        version: "0",
        website: "https://topvisor.com/account/bank/#to_bank_docs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103131.jpg",
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
        loginUrl: "https://topvisor.com/account/bank/#to_bank_docs",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TopvisorCollector.CONFIG);
    }
}
