
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class IonosUkCollector extends SketchCollector {

    static CONFIG = {
        id: "ionos_uk",
        name: "Ionos (.co.uk)",
        description: "i18n.collectors.ionos_uk.description",
        version: "0",
        website: "https://login.ionos.co.uk/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Ionos_Logo_2022.svg",
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
        loginUrl: "https://login.ionos.co.uk/",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IonosUkCollector.CONFIG);
    }
}
