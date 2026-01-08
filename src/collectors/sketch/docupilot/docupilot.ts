
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DocupilotCollector extends SketchCollector {

    static CONFIG = {
        id: "docupilot",
        name: "Docupilot",
        description: "i18n.collectors.docupilot.description",
        version: "0",
        website: "http://www.docupilot.app",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127277.jpg",
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
        loginUrl: "http://www.docupilot.app",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DocupilotCollector.CONFIG);
    }
}
