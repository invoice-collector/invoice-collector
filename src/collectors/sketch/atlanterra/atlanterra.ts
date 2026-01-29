import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AtlanterraCollector extends SketchCollector {

    static CONFIG = {
        id: "atlanterra",
        name: "Atlanterra",
        description: "i18n.collectors.atlanterra.description",
        version: "0",
        website: "https://www.atlanterra.fr",
        logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHXyscU_nVwGw/company-logo_200_200/company-logo_200_200/0/1632917302449?e=2147483647&v=beta&t=crPECphOShXgTKXrf7Gy3zaXGFJr7jW7HDrbOpTZR48",
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
        loginUrl: "https://www.atlanterra.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AtlanterraCollector.CONFIG);
    }
}
