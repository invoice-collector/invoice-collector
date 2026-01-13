
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CodecovCollector extends SketchCollector {

    static CONFIG = {
        id: "codecov",
        name: "Codecov",
        description: "i18n.collectors.codecov.description",
        version: "0",
        website: "https://github.com/login?client_id=c68c81cbfd179a50784a&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3Dc68c81cbfd179a50784a%26response_type%3Dcode%26scope%3Duser%253Aemail%252Cread%253Aorg%252Crepo%253Astatus%252Cwrite%253Arepo_hook",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50734.jpg",
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
        loginUrl: "https://github.com/login?client_id=c68c81cbfd179a50784a&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3Dc68c81cbfd179a50784a%26response_type%3Dcode%26scope%3Duser%253Aemail%252Cread%253Aorg%252Crepo%253Astatus%252Cwrite%253Arepo_hook",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CodecovCollector.CONFIG);
    }
}
