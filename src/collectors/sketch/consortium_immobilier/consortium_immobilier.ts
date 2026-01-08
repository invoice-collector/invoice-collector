
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ConsortiumImmobilierCollector extends SketchCollector {

    static CONFIG = {
        id: "consortium_immobilier",
        name: "CONSORTIUM Immobilier",
        description: "i18n.collectors.consortium_immobilier.description",
        version: "0",
        website: "https://www.consortium-immobilier.fr/gestion.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/836170.jpg",
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
        loginUrl: "https://www.consortium-immobilier.fr/gestion.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConsortiumImmobilierCollector.CONFIG);
    }
}
