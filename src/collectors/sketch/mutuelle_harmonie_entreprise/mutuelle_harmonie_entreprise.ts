
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleHarmonieEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_harmonie_entreprise",
        name: "Mutuelle Harmonie - Entreprise",
        description: "i18n.collectors.mutuelle_harmonie_entreprise.description",
        version: "0",
        website: "https://www.harmonie-mutuelle.fr/web/tout-harmonie",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129084.jpg",
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
        loginUrl: "https://www.harmonie-mutuelle.fr/web/tout-harmonie",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleHarmonieEntrepriseCollector.CONFIG);
    }
}
