
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShivaFrCollector extends SketchCollector {

    static CONFIG = {
        id: "shiva_fr",
        name: "Shiva.fr",
        description: "i18n.collectors.shiva_fr.description",
        version: "0",
        website: "https://portail.shiva.fr/?cookies",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27312.jpg",
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
        loginUrl: "https://portail.shiva.fr/?cookies",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShivaFrCollector.CONFIG);
    }
}
