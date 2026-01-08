
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ZenpressCollector extends SketchCollector {

    static CONFIG = {
        id: "zenpress",
        name: "ZENPRESS",
        description: "i18n.collectors.zenpress.description",
        version: "0",
        website: "http://www.zenpress.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24456.jpg",
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
        loginUrl: "http://www.zenpress.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZenpressCollector.CONFIG);
    }
}
