
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleGfpEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_gfp_entreprise",
        name: "Mutuelle GFP - Entreprise",
        description: "i18n.collectors.mutuelle_gfp_entreprise.description",
        version: "0",
        website: "https://entreprise.plansante.com/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/128481.jpg",
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
        loginUrl: "https://entreprise.plansante.com/auth",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleGfpEntrepriseCollector.CONFIG);
    }
}
