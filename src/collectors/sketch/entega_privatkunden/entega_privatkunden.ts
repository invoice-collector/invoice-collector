
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EntegaPrivatkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "entega_privatkunden",
        name: "Entega - Privatkunden",
        description: "i18n.collectors.entega_privatkunden.description",
        version: "0",
        website: "https://www.meineentega.de/start/anmeldung.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/13374.jpg",
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
        loginUrl: "https://www.meineentega.de/start/anmeldung.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EntegaPrivatkundenCollector.CONFIG);
    }
}
