import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LinkeoFrCollector extends SketchCollector {

    static CONFIG = {
        id: "linkeo_fr",
        name: "Linkeo",
        description: "i18n.collectors.linkeo_fr.description",
        version: "0",
        website: "https://www.linkeo.com",
        logo: "https://cdn.jaimelesstartups.fr/wp-content/uploads/2021/02/Logo%20de%20la%20startup%20Linkeo.png",
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
        loginUrl: "https://www.linkeo.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LinkeoFrCollector.CONFIG);
    }
}
