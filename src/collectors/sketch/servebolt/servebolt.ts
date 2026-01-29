
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ServeboltCollector extends SketchCollector {

    static CONFIG = {
        id: "servebolt",
        name: "Servebolt",
        description: "i18n.collectors.servebolt.description",
        version: "0",
        website: "http://www.servebolt.no",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123577.jpg",
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
        loginUrl: "http://www.servebolt.no",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ServeboltCollector.CONFIG);
    }
}
