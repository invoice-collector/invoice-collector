import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DolceGustoFrCollector extends SketchCollector {

    static CONFIG = {
        id: "dolce_gusto_fr",
        name: "Dolce Gusto",
        description: "i18n.collectors.dolce_gusto_fr.description",
        version: "0",
        website: "https://www.dolce-gusto.fr",
        logo: "https://www.dolce-gusto.fr/media/logo/stores/1/Dolce-Gusto-logo_1.png",
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
        loginUrl: "https://www.dolce-gusto.fr/customer/account/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DolceGustoFrCollector.CONFIG);
    }
}
