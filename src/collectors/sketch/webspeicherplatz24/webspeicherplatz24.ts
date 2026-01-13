
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Webspeicherplatz24Collector extends SketchCollector {

    static CONFIG = {
        id: "webspeicherplatz24",
        name: "Webspeicherplatz24.de",
        description: "i18n.collectors.webspeicherplatz24.description",
        version: "0",
        website: "https://www.webspeicherplatz24.de/cis/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1616499.jpg",
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
        loginUrl: "https://www.webspeicherplatz24.de/cis/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Webspeicherplatz24Collector.CONFIG);
    }
}
