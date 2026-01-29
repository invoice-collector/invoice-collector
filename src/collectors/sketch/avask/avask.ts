
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AvaskCollector extends SketchCollector {

    static CONFIG = {
        id: "avask",
        name: "AVASK",
        description: "i18n.collectors.avask.description",
        version: "0",
        website: "https://clientportal.avask.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3015059.jpg",
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
        loginUrl: "https://clientportal.avask.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AvaskCollector.CONFIG);
    }
}
