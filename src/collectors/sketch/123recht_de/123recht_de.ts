
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _123rechtDeCollector extends SketchCollector {

    static CONFIG = {
        id: "123recht_de",
        name: "123recht.de",
        description: "i18n.collectors.123recht_de.description",
        version: "0",
        website: "https://www.123recht.de/thick_register.asp?noiframe=1&goto=https%3A%2F%2Fwww%2E123recht%2Enet%2FDefault%2Easp%3F&ccheck=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44821.jpg",
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
        loginUrl: "https://www.123recht.de/thick_register.asp?noiframe=1&goto=https%3A%2F%2Fwww%2E123recht%2Enet%2FDefault%2Easp%3F&ccheck=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(_123rechtDeCollector.CONFIG);
    }
}
