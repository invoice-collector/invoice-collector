
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AppEntwicklerVerzeichnisCollector extends SketchCollector {

    static CONFIG = {
        id: "app_entwickler_verzeichnis",
        name: "App-Entwickler-Verzeichnis",
        description: "i18n.collectors.app_entwickler_verzeichnis.description",
        version: "0",
        website: "http://www.app-entwickler-verzeichnis.de/login-register",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2896.jpg",
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
        loginUrl: "http://www.app-entwickler-verzeichnis.de/login-register",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AppEntwicklerVerzeichnisCollector.CONFIG);
    }
}
