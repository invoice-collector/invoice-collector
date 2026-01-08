
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleVivinterEspaceAssureCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_vivinter_espace_assure",
        name: "Mutuelle Vivinter - Espace Assure",
        description: "i18n.collectors.mutuelle_vivinter_espace_assure.description",
        version: "0",
        website: "https://assure.vivinter.fr/connexion.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130686.jpg",
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
        loginUrl: "https://assure.vivinter.fr/connexion.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleVivinterEspaceAssureCollector.CONFIG);
    }
}
