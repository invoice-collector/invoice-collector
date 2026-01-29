
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvidCollector extends SketchCollector {

    static CONFIG = {
        id: "avid",
        name: "Avid",
        description: "i18n.collectors.avid.description",
        version: "0",
        website: "https://my.avid.com/account/orientation?websource=avid",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10759.jpg",
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
        loginUrl: "https://my.avid.com/account/orientation?websource=avid",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvidCollector.CONFIG);
    }
}
