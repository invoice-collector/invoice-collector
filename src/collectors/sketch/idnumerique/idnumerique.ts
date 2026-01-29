import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IdNumeriqueCollector extends SketchCollector {

    static CONFIG = {
        id: "idnumerique",
        name: "Id numerique",
        description: "i18n.collectors.idnumerique.description",
        version: "0",
        website: "https://shop.idnumerique.fr/",
        logo: "https://www.idnumerique.fr/wp-content/uploads/2014/06/logo-header.png",
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
        loginUrl: "https://shop.idnumerique.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IdNumeriqueCollector.CONFIG);
    }
}
