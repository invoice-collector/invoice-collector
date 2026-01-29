
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EauDesCollinesCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_des_collines",
        name: "Eau des Collines",
        description: "i18n.collectors.eau_des_collines.description",
        version: "0",
        website: "https://monespace.eaudescollines.fr/#/facture",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2418840.jpg",
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
        loginUrl: "https://monespace.eaudescollines.fr/#/facture",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EauDesCollinesCollector.CONFIG);
    }
}
