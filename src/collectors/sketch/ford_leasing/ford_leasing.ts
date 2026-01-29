
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FordLeasingCollector extends SketchCollector {

    static CONFIG = {
        id: "ford_leasing",
        name: "Ford Leasing",
        description: "i18n.collectors.ford_leasing.description",
        version: "0",
        website: "https://www.manager.fordfleetmanagement.fr/portal/flonetpal/DEPENSES/Votre_Coffre_Fort/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2027049.jpg",
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
        loginUrl: "https://www.manager.fordfleetmanagement.fr/portal/flonetpal/DEPENSES/Votre_Coffre_Fort/factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FordLeasingCollector.CONFIG);
    }
}
