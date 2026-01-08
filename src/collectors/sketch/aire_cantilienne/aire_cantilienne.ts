
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AireCantilienneCollector extends SketchCollector {

    static CONFIG = {
        id: "aire_cantilienne",
        name: "Aire Cantilienne",
        description: "i18n.collectors.aire_cantilienne.description",
        version: "0",
        website: "https://ccac.ecocito.com/Usager/Facture/Index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4182204.jpg",
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
        loginUrl: "https://ccac.ecocito.com/Usager/Facture/Index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AireCantilienneCollector.CONFIG);
    }
}
