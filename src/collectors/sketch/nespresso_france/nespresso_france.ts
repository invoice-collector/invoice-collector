
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NespressoFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "nespresso_france",
        name: "Nespresso France",
        description: "i18n.collectors.nespresso_france.description",
        version: "0",
        website: "https://nespresso.e-facture.net/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/567081.jpg",
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
        loginUrl: "https://nespresso.e-facture.net/index.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NespressoFranceCollector.CONFIG);
    }
}
