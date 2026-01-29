
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LichtblickFahrstromGeschaftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "lichtblick_fahrstrom_geschaftskunden",
        name: "Lichtblick Fahrstrom Geschaftskunden",
        description: "i18n.collectors.lichtblick_fahrstrom_geschaftskunden.description",
        version: "0",
        website: "https://www.lichtblick.de/konto#/posteingang",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2862892.jpg",
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
        loginUrl: "https://www.lichtblick.de/konto#/posteingang",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LichtblickFahrstromGeschaftskundenCollector.CONFIG);
    }
}
