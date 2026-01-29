
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StorritoCollector extends SketchCollector {

    static CONFIG = {
        id: "storrito",
        name: "Storrito",
        description: "i18n.collectors.storrito.description",
        version: "0",
        website: "https://app.storrito.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/712720.jpg",
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
        loginUrl: "https://app.storrito.com/#/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StorritoCollector.CONFIG);
    }
}
