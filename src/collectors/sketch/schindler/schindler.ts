import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SchindlerCollector extends SketchCollector {

    static CONFIG = {
        id: "schindler",
        name: "Schindler",
        description: "i18n.collectors.schindler.description",
        version: "0",
        website: "https://group.schindler.com",
        logo: "https://upload.wikimedia.org/wikipedia/de/0/04/Schindlerlogo.svg",
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
        loginUrl: "https://actionboard.schindler.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SchindlerCollector.CONFIG);
    }
}
