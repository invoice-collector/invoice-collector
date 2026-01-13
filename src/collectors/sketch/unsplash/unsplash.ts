
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UnsplashCollector extends SketchCollector {

    static CONFIG = {
        id: "unsplash",
        name: "unsplash+",
        description: "i18n.collectors.unsplash.description",
        version: "0",
        website: "https://invoice.stripe.com/i/acct_1KH8knGSY3yttFEY/live_YWNjdF8xS0g4a25HU1kzeXR0RkVZLF9OOUpqa0JyNjBJOUF4T2dRanZwT1RNQkIzVUg0SEV1LDY5ODgyNDkz0200rwLLgr0C?s=il&locale=de-DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862850.jpg",
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
        loginUrl: "https://invoice.stripe.com/i/acct_1KH8knGSY3yttFEY/live_YWNjdF8xS0g4a25HU1kzeXR0RkVZLF9OOUpqa0JyNjBJOUF4T2dRanZwT1RNQkIzVUg0SEV1LDY5ODgyNDkz0200rwLLgr0C?s=il&locale=de-DE",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnsplashCollector.CONFIG);
    }
}
