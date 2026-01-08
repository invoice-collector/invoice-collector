
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _24DrukwerkNlCollector extends SketchCollector {

    static CONFIG = {
        id: "24_drukwerk_nl",
        name: "24-drukwerk.nl",
        description: "i18n.collectors.24_drukwerk_nl.description",
        version: "0",
        website: "https://www.24-drukwerk.nl/mijn-account?zenid=shp22s54ojpe07fjrh89fk8tk7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33134.jpg",
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
        loginUrl: "https://www.24-drukwerk.nl/mijn-account?zenid=shp22s54ojpe07fjrh89fk8tk7",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_24DrukwerkNlCollector.CONFIG);
    }
}
