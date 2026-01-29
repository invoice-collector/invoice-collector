
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BUJHesseGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "b_u_j_hesse_gmbh_and_co_kg",
        name: "B. u. J. Hesse GmbH & Co. KG",
        description: "i18n.collectors.b_u_j_hesse_gmbh_and_co_kg.description",
        version: "0",
        website: "https://www.bj-hesse.de/kontakt/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1261118.jpg",
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
        loginUrl: "https://www.bj-hesse.de/kontakt/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BUJHesseGmbhAndCoKgCollector.CONFIG);
    }
}
