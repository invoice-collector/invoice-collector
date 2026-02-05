
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ThomannCollector extends SketchCollector {

    static CONFIG = {
        id: "thomann",
        name: "thomann",
        description: "i18n.collectors.thomann.description",
        version: "0",
        website: "https://www.thomann.de/de/mythomann_orderlist.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7328.jpg",
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
        loginUrl: "https://www.thomann.de/de/mythomann_orderlist.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ThomannCollector.CONFIG);
    }
}
