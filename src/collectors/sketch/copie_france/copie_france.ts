
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CopieFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "copie_france",
        name: "Copie France",
        description: "i18n.collectors.copie_france.description",
        version: "0",
        website: "https://espace-client.copiefrance.fr/fr/espace-client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4653665.jpg",
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
        loginUrl: "https://espace-client.copiefrance.fr/fr/espace-client",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CopieFranceCollector.CONFIG);
    }
}
