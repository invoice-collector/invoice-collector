
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ProworkflowCollector extends SketchCollector {

    static CONFIG = {
        id: "proworkflow",
        name: "ProWorkflow",
        description: "i18n.collectors.proworkflow.description",
        version: "0",
        website: "https://www.proworkflow.com/clients/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8277.jpg",
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
        loginUrl: "https://www.proworkflow.com/clients/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProworkflowCollector.CONFIG);
    }
}
