
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BullfrogPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "bullfrog_power",
        name: "Bullfrog Power",
        description: "i18n.collectors.bullfrog_power.description",
        version: "0",
        website: "https://www.bullfrogpower.com/mybullfrog/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8649.jpg",
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
        loginUrl: "https://www.bullfrogpower.com/mybullfrog/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BullfrogPowerCollector.CONFIG);
    }
}
