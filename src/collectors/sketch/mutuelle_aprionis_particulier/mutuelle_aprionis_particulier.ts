
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleAprionisParticulierCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_aprionis_particulier",
        name: "Mutuelle Aprionis - particulier",
        description: "i18n.collectors.mutuelle_aprionis_particulier.description",
        version: "0",
        website: "https://humanis.com/votre-espace-client-particulier/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127364.jpg",
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
        loginUrl: "https://humanis.com/votre-espace-client-particulier/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleAprionisParticulierCollector.CONFIG);
    }
}
