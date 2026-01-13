
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonCoJpCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_co_jp",
        name: "Amazon (.co.jp)",
        description: "i18n.collectors.amazon_co_jp.description",
        version: "0",
        website: "https://www.amazon.co.jp/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46908.jpg",
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
        loginUrl: "https://www.amazon.co.jp/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonCoJpCollector.CONFIG);
    }
}
