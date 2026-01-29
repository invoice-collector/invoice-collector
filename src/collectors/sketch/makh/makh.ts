
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MakhCollector extends SketchCollector {

    static CONFIG = {
        id: "makh",
        name: "MAKH",
        description: "i18n.collectors.makh.description",
        version: "0",
        website: "https://www.makh.org/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/587704.jpg",
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
        loginUrl: "https://www.makh.org/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MakhCollector.CONFIG);
    }
}
