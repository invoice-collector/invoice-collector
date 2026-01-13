
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WeltDeCollector extends SketchCollector {

    static CONFIG = {
        id: "welt_de",
        name: "welt.de",
        description: "i18n.collectors.welt_de.description",
        version: "0",
        website: "welt.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1316283.jpg",
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
        loginUrl: "welt.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WeltDeCollector.CONFIG);
    }
}
