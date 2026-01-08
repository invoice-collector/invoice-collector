import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ArteInternationalCollector extends SketchCollector {

    static CONFIG = {
        id: "arte_international",
        name: "Arte International",
        description: "i18n.collectors.arte_international.description",
        version: "0",
        website: "https://www.arte-international.com",
        logo: "https://www.amershamdesigns.co.uk/uploads/images/products/large/amershamdesigns_artewallcoverings_artesymbolwallcovering_1527087006ARTElogoLR.jpg",
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
        loginUrl: "https://account.arte-international.com/fr/login?service=front",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ArteInternationalCollector.CONFIG);
    }
}
