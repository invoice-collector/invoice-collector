
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChadwicksGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "chadwicks_group",
        name: "Chadwicks Group",
        description: "i18n.collectors.chadwicks_group.description",
        version: "0",
        website: "https://grafton.softco.com/gmroi/Account/Login?ReturnUrl=%2Fgmroi%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/761341.jpg",
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
        loginUrl: "https://grafton.softco.com/gmroi/Account/Login?ReturnUrl=%2Fgmroi%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChadwicksGroupCollector.CONFIG);
    }
}
