import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BricomanCollector extends SketchCollector {

    static CONFIG = {
        id: "bricoman",
        name: "Bricoman",
        description: "i18n.collectors.bricoman.description",
        version: "0",
        website: "https://bricoman.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/2/24/Logo_Bricoman.svg",
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
        loginUrl: "https://www.bricoman.fr/login.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BricomanCollector.CONFIG);
    }
}
