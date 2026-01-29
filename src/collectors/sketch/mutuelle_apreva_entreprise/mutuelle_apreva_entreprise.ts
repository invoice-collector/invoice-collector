
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleAprevaEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_apreva_entreprise",
        name: "Mutuelle Apreva Entreprise",
        description: "i18n.collectors.mutuelle_apreva_entreprise.description",
        version: "0",
        website: "https://entreprise.apreva.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127321.jpg",
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
        loginUrl: "https://entreprise.apreva.fr/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleAprevaEntrepriseCollector.CONFIG);
    }
}
