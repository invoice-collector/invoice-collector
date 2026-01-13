
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CircleciCollector extends SketchCollector {

    static CONFIG = {
        id: "circleci",
        name: "CircleCI",
        description: "i18n.collectors.circleci.description",
        version: "0",
        website: "https://circleci.com/vcs-authorize/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7673.jpg",
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
        loginUrl: "https://circleci.com/vcs-authorize/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CircleciCollector.CONFIG);
    }
}
