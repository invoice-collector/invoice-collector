
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VimeoCollector extends SketchCollector {

    static CONFIG = {
        id: "vimeo",
        name: "Vimeo",
        description: "i18n.collectors.vimeo.description",
        version: "0",
        website: "https://vimeo.com/settings/billing/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7802.jpg",
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
        loginUrl: "https://vimeo.com/settings/billing/purchases",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VimeoCollector.CONFIG);
    }
}
