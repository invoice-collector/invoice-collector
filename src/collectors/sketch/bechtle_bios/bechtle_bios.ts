
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BechtleBiosCollector extends SketchCollector {

    static CONFIG = {
        id: "bechtle_bios",
        name: "BECHTLE BIOS",
        description: "i18n.collectors.bechtle_bios.description",
        version: "0",
        website: "https://bios.bechtle.com/de/orderHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156398.jpg",
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
        loginUrl: "https://bios.bechtle.com/de/orderHistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BechtleBiosCollector.CONFIG);
    }
}
