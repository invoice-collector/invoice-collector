
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ButagazCollector extends SketchCollector {

    static CONFIG = {
        id: "butagaz",
        name: "Butagaz",
        description: "i18n.collectors.butagaz.description",
        version: "0",
        website: "https://espace-client.butagaz.fr/facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3083381.jpg",
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
        loginUrl: "https://espace-client.butagaz.fr/facture",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ButagazCollector.CONFIG);
    }
}
