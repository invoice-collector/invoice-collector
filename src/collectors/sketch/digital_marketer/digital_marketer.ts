
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DigitalMarketerCollector extends SketchCollector {

    static CONFIG = {
        id: "digital_marketer",
        name: "Digital Marketer",
        description: "i18n.collectors.digital_marketer.description",
        version: "0",
        website: "https://lab.digitalmarketer.com/users/edit",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49771.jpg",
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
        loginUrl: "https://lab.digitalmarketer.com/users/edit",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DigitalMarketerCollector.CONFIG);
    }
}
