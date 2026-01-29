
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PflegecampusCollector extends SketchCollector {

    static CONFIG = {
        id: "pflegecampus",
        name: "pflegecampus",
        description: "i18n.collectors.pflegecampus.description",
        version: "0",
        website: "http://www.pflegecampus.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/472920.jpg",
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
        loginUrl: "http://www.pflegecampus.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PflegecampusCollector.CONFIG);
    }
}
