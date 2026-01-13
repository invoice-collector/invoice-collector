
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MarkECollector extends SketchCollector {

    static CONFIG = {
        id: "mark_e",
        name: "Mark-E",
        description: "i18n.collectors.mark_e.description",
        version: "0",
        website: "https://selfservice.mark-e.de/portal/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/429772.jpg",
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
        loginUrl: "https://selfservice.mark-e.de/portal/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarkECollector.CONFIG);
    }
}
