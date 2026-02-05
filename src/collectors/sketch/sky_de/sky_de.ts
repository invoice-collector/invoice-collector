
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SkyDeCollector extends SketchCollector {

    static CONFIG = {
        id: "sky_de",
        name: "Sky.de",
        description: "i18n.collectors.sky_de.description",
        version: "0",
        website: "http://www.sky.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18246.jpg",
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
        loginUrl: "http://www.sky.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SkyDeCollector.CONFIG);
    }
}
