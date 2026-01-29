
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NeutrinoApiCollector extends SketchCollector {

    static CONFIG = {
        id: "neutrino_api",
        name: "Neutrino API",
        description: "i18n.collectors.neutrino_api.description",
        version: "0",
        website: "https://www.neutrinoapi.com/account/billing-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748680.jpg",
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
        loginUrl: "https://www.neutrinoapi.com/account/billing-history/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NeutrinoApiCollector.CONFIG);
    }
}
