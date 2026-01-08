
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BoatdriverChCollector extends SketchCollector {

    static CONFIG = {
        id: "boatdriver_ch",
        name: "BoatDriver.ch",
        description: "i18n.collectors.boatdriver_ch.description",
        version: "0",
        website: "https://www.boatdriver.ch/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/556589.jpg",
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
        loginUrl: "https://www.boatdriver.ch/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BoatdriverChCollector.CONFIG);
    }
}
