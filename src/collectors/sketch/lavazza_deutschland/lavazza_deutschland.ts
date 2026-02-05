
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LavazzaDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "lavazza_deutschland",
        name: "Lavazza Deutschland",
        description: "i18n.collectors.lavazza_deutschland.description",
        version: "0",
        website: "https://customerportal.lavazza.com/s/login/?language=en_US",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3025556.jpg",
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
        loginUrl: "https://customerportal.lavazza.com/s/login/?language=en_US",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LavazzaDeutschlandCollector.CONFIG);
    }
}
