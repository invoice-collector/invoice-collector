
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmpidoCollector extends SketchCollector {

    static CONFIG = {
        id: "ampido",
        name: "ampido",
        description: "i18n.collectors.ampido.description",
        version: "0",
        website: "https://www.ampido.com/myRents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1540039.jpg",
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
        loginUrl: "https://www.ampido.com/myRents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmpidoCollector.CONFIG);
    }
}
