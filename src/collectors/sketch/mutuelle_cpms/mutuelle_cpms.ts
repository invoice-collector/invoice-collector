
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleCpmsCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_cpms",
        name: "Mutuelle CPMS",
        description: "i18n.collectors.mutuelle_cpms.description",
        version: "0",
        website: "https://www.cpms.fr/connexion-particulier/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127680.jpg",
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
        loginUrl: "https://www.cpms.fr/connexion-particulier/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleCpmsCollector.CONFIG);
    }
}
