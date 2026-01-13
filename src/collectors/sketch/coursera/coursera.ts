
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CourseraCollector extends SketchCollector {

    static CONFIG = {
        id: "coursera",
        name: "Coursera",
        description: "i18n.collectors.coursera.description",
        version: "0",
        website: "https://www.coursera.org/?authMode=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62049.jpg",
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
        loginUrl: "https://www.coursera.org/?authMode=login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CourseraCollector.CONFIG);
    }
}
