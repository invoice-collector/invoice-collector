
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MentionlyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "mentionlytics",
        name: "mentionlytics",
        description: "i18n.collectors.mentionlytics.description",
        version: "0",
        website: "www.mentionlytics.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428658.jpg",
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
        loginUrl: "www.mentionlytics.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MentionlyticsCollector.CONFIG);
    }
}
