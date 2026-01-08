
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VirtuagymCollector extends SketchCollector {

    static CONFIG = {
        id: "virtuagym",
        name: "Virtuagym",
        description: "i18n.collectors.virtuagym.description",
        version: "0",
        website: "http://www.virtuagym.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16485.jpg",
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
        loginUrl: "http://www.virtuagym.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VirtuagymCollector.CONFIG);
    }
}
