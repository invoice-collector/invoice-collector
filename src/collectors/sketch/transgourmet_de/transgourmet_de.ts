
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TransgourmetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "transgourmet_de",
        name: "Transgourmet.de",
        description: "i18n.collectors.transgourmet_de.description",
        version: "0",
        website: "http://www.transgourmet.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54754.jpg",
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
        loginUrl: "http://www.transgourmet.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransgourmetDeCollector.CONFIG);
    }
}
