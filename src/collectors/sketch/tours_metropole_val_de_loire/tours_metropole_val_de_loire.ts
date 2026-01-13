
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ToursMetropoleValDeLoireCollector extends SketchCollector {

    static CONFIG = {
        id: "tours_metropole_val_de_loire",
        name: "Tours metropole Val de Loire",
        description: "i18n.collectors.tours_metropole_val_de_loire.description",
        version: "0",
        website: "https://abonnes-eau.tours-metropole.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/846099.jpg",
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
        loginUrl: "https://abonnes-eau.tours-metropole.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToursMetropoleValDeLoireCollector.CONFIG);
    }
}
