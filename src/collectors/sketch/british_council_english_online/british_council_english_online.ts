
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BritishCouncilEnglishOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "british_council_english_online",
        name: "British Council English Online",
        description: "i18n.collectors.british_council_english_online.description",
        version: "0",
        website: "https://englishonline.britishcouncil.org/platform/nui/reactui/build/index.html#/subscription/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1416080.jpg",
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
        loginUrl: "https://englishonline.britishcouncil.org/platform/nui/reactui/build/index.html#/subscription/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BritishCouncilEnglishOnlineCollector.CONFIG);
    }
}
