
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PassmarkSoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "passmark_software",
        name: "PassMark Software",
        description: "i18n.collectors.passmark_software.description",
        version: "0",
        website: "https://www.passmark.com/profile.php?history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3014707.jpg",
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
        loginUrl: "https://www.passmark.com/profile.php?history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PassmarkSoftwareCollector.CONFIG);
    }
}
