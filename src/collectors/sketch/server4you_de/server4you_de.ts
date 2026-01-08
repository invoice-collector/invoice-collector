
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Server4youDeCollector extends SketchCollector {

    static CONFIG = {
        id: "server4you_de",
        name: "SERVER4YOU.de",
        description: "i18n.collectors.server4you_de.description",
        version: "0",
        website: "https://my.server4you.de/de/Generic/Auth/Index/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/315.jpg",
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
        loginUrl: "https://my.server4you.de/de/Generic/Auth/Index/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Server4youDeCollector.CONFIG);
    }
}
