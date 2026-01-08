import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LeauDileDeFranceBailleursSyndicsCollector extends SketchCollector {

    static CONFIG = {
        id: "leaudiledefrance_bailleurs_syndics",
        name: "L'eau d'Île-de-France (Bailleurs/Syndics)",
        description: "i18n.collectors.leaudiledefrance.description",
        version: "0",
        website: "https://www.leaudiledefrance.fr/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6asmbkt0q9fF-5f1yZmyK_EOb-CIesBnHA&s",
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
        loginUrl: "https://connexion.leaudiledefrance.fr/espace-bailleurs-syndics/s/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeauDileDeFranceBailleursSyndicsCollector.CONFIG);
    }
}
