
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NovofleetCollector extends SketchCollector {

    static CONFIG = {
        id: "novofleet",
        name: "Novofleet",
        description: "i18n.collectors.novofleet.description",
        version: "0",
        website: "https://www.novofleet.com/portal/de/mein-novofleet-login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15359.jpg",
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
        loginUrl: "https://www.novofleet.com/portal/de/mein-novofleet-login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NovofleetCollector.CONFIG);
    }
}
