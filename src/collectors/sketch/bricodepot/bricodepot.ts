import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BricoDepotCollector extends SketchCollector {

    static CONFIG = {
        id: "bricodepot",
        name: "Brico dépôt",
        description: "i18n.collectors.bricodepot.description",
        version: "0",
        website: "https://bricodepot.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Bricodepot.svg",
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
        loginUrl: "https://www.bricodepot.fr/catalogue/account/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BricoDepotCollector.CONFIG);
    }
}
