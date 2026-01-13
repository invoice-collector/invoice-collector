
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ToutembalCollector extends SketchCollector {

    static CONFIG = {
        id: "toutembal",
        name: "Toutembal",
        description: "i18n.collectors.toutembal.description",
        version: "0",
        website: "https://www.toutembal.fr/commande_visualiser.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4650859.jpg",
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
        loginUrl: "https://www.toutembal.fr/commande_visualiser.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToutembalCollector.CONFIG);
    }
}
