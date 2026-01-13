import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TemuCollector extends SketchCollector {

    static CONFIG = {
        id: "temu",
        name: "Temu",
        description: "i18n.collectors.temu.description",
        version: "0",
        website: "https://temu.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/a/a6/Temu_logo.svg",
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
        loginUrl: "https://www.temu.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TemuCollector.CONFIG);
    }
}
