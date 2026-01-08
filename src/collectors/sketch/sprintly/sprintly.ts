
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SprintlyCollector extends SketchCollector {

    static CONFIG = {
        id: "sprintly",
        name: "Sprintly",
        description: "i18n.collectors.sprintly.description",
        version: "0",
        website: "http://www.sprint.ly",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8805.jpg",
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
        loginUrl: "http://www.sprint.ly",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SprintlyCollector.CONFIG);
    }
}
