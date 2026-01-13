
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Buroservice24Collector extends SketchCollector {

    static CONFIG = {
        id: "buroservice24",
        name: "Buroservice24",
        description: "i18n.collectors.buroservice24.description",
        version: "0",
        website: "http://www.bueroservice24.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31522.jpg",
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
        loginUrl: "http://www.bueroservice24.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Buroservice24Collector.CONFIG);
    }
}
