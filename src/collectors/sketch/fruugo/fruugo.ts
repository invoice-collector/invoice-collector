
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FruugoCollector extends SketchCollector {

    static CONFIG = {
        id: "fruugo",
        name: "Fruugo",
        description: "i18n.collectors.fruugo.description",
        version: "0",
        website: "https://retailer.fruugo.com/index?rccsPublicRootUrl=https%3A%2F%2Fwww.fruugo.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762141.jpg",
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
        loginUrl: "https://retailer.fruugo.com/index?rccsPublicRootUrl=https%3A%2F%2Fwww.fruugo.com%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FruugoCollector.CONFIG);
    }
}
