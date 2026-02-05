import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SoneparDeCollector extends SketchCollector {

    static CONFIG = {
        id: "sonepar_de",
        name: "Sonepar (.de)",
        description: "i18n.collectors.sonepar.description",
        version: "1",
        website: "https://www.sonepar.de/",
        logo: "https://upload.wikimedia.org/wikipedia/de/b/ba/Sonepar_2025_logo.svg",
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
        loginUrl: "https://www.sonepar.de/authentication/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SoneparDeCollector.CONFIG);
    }
}
