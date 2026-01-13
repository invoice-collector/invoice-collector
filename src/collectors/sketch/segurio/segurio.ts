
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SegurioCollector extends SketchCollector {

    static CONFIG = {
        id: "segurio",
        name: "Segurio",
        description: "i18n.collectors.segurio.description",
        version: "0",
        website: "https://segurio.com/de/users/sign_in?l=en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732077.jpg",
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
        loginUrl: "https://segurio.com/de/users/sign_in?l=en",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SegurioCollector.CONFIG);
    }
}
