
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Dew21Collector extends SketchCollector {

    static CONFIG = {
        id: "dew21",
        name: "DEW21",
        description: "i18n.collectors.dew21.description",
        version: "0",
        website: "https://www.dew21.de/mein-konto/anmeldung/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64476.jpg",
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
        loginUrl: "https://www.dew21.de/mein-konto/anmeldung/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Dew21Collector.CONFIG);
    }
}
