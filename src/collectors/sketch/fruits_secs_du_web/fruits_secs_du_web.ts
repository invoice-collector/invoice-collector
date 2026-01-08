
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FruitsSecsDuWebCollector extends SketchCollector {

    static CONFIG = {
        id: "fruits_secs_du_web",
        name: "Fruits secs du web",
        description: "i18n.collectors.fruits_secs_du_web.description",
        version: "0",
        website: "https://www.fruitssecsduweb.com/commande",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118623.jpg",
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
        loginUrl: "https://www.fruitssecsduweb.com/commande",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FruitsSecsDuWebCollector.CONFIG);
    }
}
