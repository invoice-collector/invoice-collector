
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OlxRoCollector extends SketchCollector {

    static CONFIG = {
        id: "olx_ro",
        name: "OLX. ro",
        description: "i18n.collectors.olx_ro.description",
        version: "0",
        website: "https://www.olx.ro/myaccount/invoiceslist/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732658.jpg",
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
        loginUrl: "https://www.olx.ro/myaccount/invoiceslist/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OlxRoCollector.CONFIG);
    }
}
