
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SaxoprintCollector extends SketchCollector {

    static CONFIG = {
        id: "saxoprint",
        name: "SAXOPRINT",
        description: "i18n.collectors.saxoprint.description",
        version: "0",
        website: "https://www.saxoprint.de/login.aspx?url=%2fkundenbereich%2fauftragsuebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7333.jpg",
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
        loginUrl: "https://www.saxoprint.de/login.aspx?url=%2fkundenbereich%2fauftragsuebersicht",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SaxoprintCollector.CONFIG);
    }
}
