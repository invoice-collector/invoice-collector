
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ArgewebNlCollector extends SketchCollector {

    static CONFIG = {
        id: "argeweb_nl",
        name: "argeweb.nl",
        description: "i18n.collectors.argeweb_nl.description",
        version: "0",
        website: "https://www.argeweb.nl/argecs/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20509.jpg",
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
        loginUrl: "https://www.argeweb.nl/argecs/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ArgewebNlCollector.CONFIG);
    }
}
