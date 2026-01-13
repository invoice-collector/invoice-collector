
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GetformIoCollector extends SketchCollector {

    static CONFIG = {
        id: "getform_io",
        name: "getform.io",
        description: "i18n.collectors.getform_io.description",
        version: "0",
        website: "https://app.getform.io/forms",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2220341.jpg",
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
        loginUrl: "https://app.getform.io/forms",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GetformIoCollector.CONFIG);
    }
}
