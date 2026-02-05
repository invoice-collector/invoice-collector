
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DartyboxCollector extends SketchCollector {

    static CONFIG = {
        id: "dartybox",
        name: "Dartybox",
        description: "i18n.collectors.dartybox.description",
        version: "0",
        website: "https://www.dartybox.com/redbox-frontoffice-web/wac03-forwardLoginPage.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27353.jpg",
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
        loginUrl: "https://www.dartybox.com/redbox-frontoffice-web/wac03-forwardLoginPage.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DartyboxCollector.CONFIG);
    }
}
