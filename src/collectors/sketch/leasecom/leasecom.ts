import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LeasecomCollector extends SketchCollector {

    static CONFIG = {
        id: "leasecom",
        name: "Leasecom",
        description: "i18n.collectors.leasecom.description",
        version: "0",
        website: "https://www.leasecom.fr",
        logo: "https://www.leasecom.fr/img/zFpFgvw97y-236.svg",
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
        loginUrl: "https://partenaire.leasecom.fr/authentification-fintake/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LeasecomCollector.CONFIG);
    }
}
