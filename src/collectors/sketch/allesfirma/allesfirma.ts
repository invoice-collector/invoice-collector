
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllesfirmaCollector extends SketchCollector {

    static CONFIG = {
        id: "allesfirma",
        name: "Allesfirma",
        description: "i18n.collectors.allesfirma.description",
        version: "0",
        website: "https://www.allesfirma.at/app/einstellungen/konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213128.jpg",
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
        loginUrl: "https://www.allesfirma.at/app/einstellungen/konto",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AllesfirmaCollector.CONFIG);
    }
}
