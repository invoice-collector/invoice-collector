
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GiganewsCollector extends SketchCollector {

    static CONFIG = {
        id: "giganews",
        name: "Giganews",
        description: "i18n.collectors.giganews.description",
        version: "0",
        website: "https://www.giganews.com/controlpanel/invoice.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7997.jpg",
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
        loginUrl: "https://www.giganews.com/controlpanel/invoice.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GiganewsCollector.CONFIG);
    }
}
