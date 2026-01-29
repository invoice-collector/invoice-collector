
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleIpecaParticulierCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_ipeca_particulier",
        name: "Mutuelle IPECA - Particulier",
        description: "i18n.collectors.mutuelle_ipeca_particulier.description",
        version: "0",
        website: "https://participants.ipeca.fr/particulier/Pages/Particulier-home-actualite.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129080.jpg",
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
        loginUrl: "https://participants.ipeca.fr/particulier/Pages/Particulier-home-actualite.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleIpecaParticulierCollector.CONFIG);
    }
}
