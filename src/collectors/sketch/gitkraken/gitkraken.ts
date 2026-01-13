
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GitkrakenCollector extends SketchCollector {

    static CONFIG = {
        id: "gitkraken",
        name: "GitKraken",
        description: "i18n.collectors.gitkraken.description",
        version: "0",
        website: "https://gitkraken.dev/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30046.jpg",
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
        loginUrl: "https://gitkraken.dev/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GitkrakenCollector.CONFIG);
    }
}
