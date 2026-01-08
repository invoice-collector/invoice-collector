
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EauDuBassinRennaisCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_du_bassin_rennais",
        name: "Eau Du Bassin Rennais",
        description: "i18n.collectors.eau_du_bassin_rennais.description",
        version: "0",
        website: "https://www.eaudubassinrennais.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778926.jpg",
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
        loginUrl: "https://www.eaudubassinrennais.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EauDuBassinRennaisCollector.CONFIG);
    }
}
