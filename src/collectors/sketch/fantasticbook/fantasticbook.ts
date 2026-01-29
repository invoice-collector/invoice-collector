
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FantasticbookCollector extends SketchCollector {

    static CONFIG = {
        id: "fantasticbook",
        name: "fantasticbook",
        description: "i18n.collectors.fantasticbook.description",
        version: "0",
        website: "https://brocolis.fantasticbook.co/user/clients/bank/Qi1-NQ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777349.jpg",
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
        loginUrl: "https://brocolis.fantasticbook.co/user/clients/bank/Qi1-NQ",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FantasticbookCollector.CONFIG);
    }
}
