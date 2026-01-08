
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IdentbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "identbase",
        name: "Identbase",
        description: "i18n.collectors.identbase.description",
        version: "0",
        website: "https://identbase.de/shop/system/?func=customer&action=orderlist&",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1496524.jpg",
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
        loginUrl: "https://identbase.de/shop/system/?func=customer&action=orderlist&",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IdentbaseCollector.CONFIG);
    }
}
