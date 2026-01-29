
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _1euroComCollector extends SketchCollector {

    static CONFIG = {
        id: "1euro_com",
        name: "1euro.com",
        description: "i18n.collectors.1euro_com.description",
        version: "0",
        website: "https://www.cofidis.fr/fr/espace-client/1euro_identification.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109162.jpg",
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
        loginUrl: "https://www.cofidis.fr/fr/espace-client/1euro_identification.cgi",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(_1euroComCollector.CONFIG);
    }
}
