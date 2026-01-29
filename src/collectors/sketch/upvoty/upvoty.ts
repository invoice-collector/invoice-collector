
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UpvotyCollector extends SketchCollector {

    static CONFIG = {
        id: "upvoty",
        name: "upvoty",
        description: "i18n.collectors.upvoty.description",
        version: "0",
        website: "https://crm.upvoty.com/members/auth/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/811730.jpg",
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
        loginUrl: "https://crm.upvoty.com/members/auth/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UpvotyCollector.CONFIG);
    }
}
