
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NexityCollector extends SketchCollector {

    static CONFIG = {
        id: "nexity",
        name: "Nexity",
        description: "i18n.collectors.nexity.description",
        version: "0",
        website: "https://www.nexity.fr/espace-personnel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108545.jpg",
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
        loginUrl: "https://www.nexity.fr/espace-personnel",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NexityCollector.CONFIG);
    }
}
