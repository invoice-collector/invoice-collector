
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SecuritasDirectEsCollector extends SketchCollector {

    static CONFIG = {
        id: "securitas_direct_es",
        name: "Securitas Direct (.es)",
        description: "i18n.collectors.securitas_direct_es.description",
        version: "0",
        website: "https://customers.securitasdirect.es/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428154.jpg",
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
        loginUrl: "https://customers.securitasdirect.es/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SecuritasDirectEsCollector.CONFIG);
    }
}
