
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VeoliaEauEspaceClientCollector extends SketchCollector {

    static CONFIG = {
        id: "veolia_eau_espace_client",
        name: "Veolia Eau - Espace Client",
        description: "i18n.collectors.veolia_eau_espace_client.description",
        version: "0",
        website: "https://espace-client.vedif.eau.veolia.fr/s/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/854040.jpg",
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
        loginUrl: "https://espace-client.vedif.eau.veolia.fr/s/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VeoliaEauEspaceClientCollector.CONFIG);
    }
}
