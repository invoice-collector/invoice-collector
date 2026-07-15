
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class IonosComCollector extends SketchCollector {

    static CONFIG = {
        id: "ionos_com",
        name: "Ionos (.com)",
        description: "i18n.collectors.ionos_com.description",
        version: "0",
        website: "https://login.ionos.com/",
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
        loginUrl: "https://login.ionos.com/",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IonosComCollector.CONFIG);
    }
}
