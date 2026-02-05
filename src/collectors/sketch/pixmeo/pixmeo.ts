
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PixmeoCollector extends SketchCollector {

    static CONFIG = {
        id: "pixmeo",
        name: "Pixmeo",
        description: "i18n.collectors.pixmeo.description",
        version: "0",
        website: "https://pixmeo.pixmeo.com/pixmeo/login/subscription/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4196733.jpg",
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
        loginUrl: "https://pixmeo.pixmeo.com/pixmeo/login/subscription/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PixmeoCollector.CONFIG);
    }
}
