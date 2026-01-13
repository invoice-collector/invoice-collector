
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DetercentreCollector extends SketchCollector {

    static CONFIG = {
        id: "detercentre",
        name: "Detercentre",
        description: "i18n.collectors.detercentre.description",
        version: "0",
        website: "https://e.detercentre.heegeo.fr/historique-factures.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4561114.jpg",
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
        loginUrl: "https://e.detercentre.heegeo.fr/historique-factures.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DetercentreCollector.CONFIG);
    }
}
