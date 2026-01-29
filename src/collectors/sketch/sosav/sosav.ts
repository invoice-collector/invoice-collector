
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SosavCollector extends SketchCollector {

    static CONFIG = {
        id: "sosav",
        name: "SOSav",
        description: "i18n.collectors.sosav.description",
        version: "0",
        website: "https://www.sosav.fr/store/historique-commandes#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2792849.jpg",
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
        loginUrl: "https://www.sosav.fr/store/historique-commandes#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SosavCollector.CONFIG);
    }
}
