
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TarifcheckCollector extends SketchCollector {

    static CONFIG = {
        id: "tarifcheck",
        name: "Tarifcheck",
        description: "i18n.collectors.tarifcheck.description",
        version: "0",
        website: "https://www.versicherungspartnerprogramm.de/berichte/gutschriften/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156400.jpg",
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
        loginUrl: "https://www.versicherungspartnerprogramm.de/berichte/gutschriften/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TarifcheckCollector.CONFIG);
    }
}
