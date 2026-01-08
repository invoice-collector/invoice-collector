
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DigiphotoproCollector extends SketchCollector {

    static CONFIG = {
        id: "digiphotopro",
        name: "Digiphotopro",
        description: "i18n.collectors.digiphotopro.description",
        version: "0",
        website: "https://digiphotopro.de/registrierung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70692.jpg",
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
        loginUrl: "https://digiphotopro.de/registrierung",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigiphotoproCollector.CONFIG);
    }
}
