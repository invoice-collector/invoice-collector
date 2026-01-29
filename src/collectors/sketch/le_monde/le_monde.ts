
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LeMondeCollector extends SketchCollector {

    static CONFIG = {
        id: "le_monde",
        name: "Le Monde",
        description: "i18n.collectors.le_monde.description",
        version: "0",
        website: "https://moncompte.lemonde.fr/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68986.jpg",
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
        loginUrl: "https://moncompte.lemonde.fr/sales/order/history/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LeMondeCollector.CONFIG);
    }
}
