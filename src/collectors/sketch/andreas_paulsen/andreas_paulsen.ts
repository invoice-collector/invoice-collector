
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AndreasPaulsenCollector extends SketchCollector {

    static CONFIG = {
        id: "andreas_paulsen",
        name: "Andreas Paulsen",
        description: "i18n.collectors.andreas_paulsen.description",
        version: "0",
        website: "https://www.paulsen-online.de/v3/rechnungsarchiv.csp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67847.jpg",
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
        loginUrl: "https://www.paulsen-online.de/v3/rechnungsarchiv.csp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AndreasPaulsenCollector.CONFIG);
    }
}
