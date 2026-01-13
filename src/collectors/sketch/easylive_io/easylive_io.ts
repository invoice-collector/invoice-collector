
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EasyliveIoCollector extends SketchCollector {

    static CONFIG = {
        id: "easylive_io",
        name: "Easylive.io",
        description: "i18n.collectors.easylive_io.description",
        version: "0",
        website: "https://studio.easylive.io/settings/customer/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396884.jpg",
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
        loginUrl: "https://studio.easylive.io/settings/customer/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyliveIoCollector.CONFIG);
    }
}
