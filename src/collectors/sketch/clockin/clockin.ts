
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ClockinCollector extends SketchCollector {

    static CONFIG = {
        id: "clockin",
        name: "Clockin",
        description: "i18n.collectors.clockin.description",
        version: "0",
        website: "http://www.clockin.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172327.jpg",
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
        loginUrl: "http://www.clockin.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ClockinCollector.CONFIG);
    }
}
