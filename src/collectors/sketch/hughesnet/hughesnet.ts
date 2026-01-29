
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HughesnetCollector extends SketchCollector {

    static CONFIG = {
        id: "hughesnet",
        name: "HughesNet",
        description: "i18n.collectors.hughesnet.description",
        version: "0",
        website: "http://my.hughesnet.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8687.jpg",
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
        loginUrl: "http://my.hughesnet.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HughesnetCollector.CONFIG);
    }
}
