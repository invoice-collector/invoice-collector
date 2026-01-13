
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KarmaBotCollector extends SketchCollector {

    static CONFIG = {
        id: "karma_bot",
        name: "karma Bot",
        description: "i18n.collectors.karma_bot.description",
        version: "0",
        website: "https://app.karmabot.chat/admin/billing#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1540083.jpg",
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
        loginUrl: "https://app.karmabot.chat/admin/billing#/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KarmaBotCollector.CONFIG);
    }
}
