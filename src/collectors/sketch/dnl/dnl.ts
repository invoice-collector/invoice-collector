
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DnlCollector extends SketchCollector {

    static CONFIG = {
        id: "dnl",
        name: "DNL",
        description: "i18n.collectors.dnl.description",
        version: "0",
        website: "https://www.dnl.fr/moncompte_comptabilite_liste.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1674447.jpg",
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
        loginUrl: "https://www.dnl.fr/moncompte_comptabilite_liste.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DnlCollector.CONFIG);
    }
}
