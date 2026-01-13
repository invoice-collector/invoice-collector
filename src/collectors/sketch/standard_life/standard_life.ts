
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StandardLifeCollector extends SketchCollector {

    static CONFIG = {
        id: "standard_life",
        name: "Standard Life",
        description: "i18n.collectors.standard_life.description",
        version: "0",
        website: "https://bs.standardlife.de/slcontroller/home/page.home.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777329.jpg",
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
        loginUrl: "https://bs.standardlife.de/slcontroller/home/page.home.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StandardLifeCollector.CONFIG);
    }
}
