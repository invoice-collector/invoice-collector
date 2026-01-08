
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaCarteCarburantClientCollector extends SketchCollector {

    static CONFIG = {
        id: "la_carte_carburant_client",
        name: "La Carte Carburant - Client",
        description: "i18n.collectors.la_carte_carburant_client.description",
        version: "0",
        website: "https://client.lacartecarburant.com/authentification?returnUrl=%2Ffactures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3026048.jpg",
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
        loginUrl: "https://client.lacartecarburant.com/authentification?returnUrl=%2Ffactures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaCarteCarburantClientCollector.CONFIG);
    }
}
