
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TextexpanderCollector extends SketchCollector {

    static CONFIG = {
        id: "textexpander",
        name: "TextExpander",
        description: "i18n.collectors.textexpander.description",
        version: "0",
        website: "https://app.textexpander.com/sign-in?_ga=2.163229436.17416616.1524109530-703412389.1524109530",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38328.jpg",
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
        loginUrl: "https://app.textexpander.com/sign-in?_ga=2.163229436.17416616.1524109530-703412389.1524109530",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TextexpanderCollector.CONFIG);
    }
}
