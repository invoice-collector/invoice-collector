
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YellowbrickDeCollector extends SketchCollector {

    static CONFIG = {
        id: "yellowbrick_de",
        name: "yellowbrick.de",
        description: "i18n.collectors.yellowbrick_de.description",
        version: "0",
        website: "https://my.yellowbrick.de/MyYellowbrick/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31406.jpg",
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
        loginUrl: "https://my.yellowbrick.de/MyYellowbrick/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YellowbrickDeCollector.CONFIG);
    }
}
