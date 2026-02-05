
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LAssuranceRetraiteCollector extends SketchCollector {

    static CONFIG = {
        id: "l_assurance_retraite",
        name: "L\'assurance retraite",
        description: "i18n.collectors.l_assurance_retraite.description",
        version: "0",
        website: "https://www.lassuranceretraite.fr/portail-services-ihm/#/authentifier",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106893.jpg",
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
        loginUrl: "https://www.lassuranceretraite.fr/portail-services-ihm/#/authentifier",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LAssuranceRetraiteCollector.CONFIG);
    }
}
