
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BookbeatCollector extends SketchCollector {

    static CONFIG = {
        id: "bookbeat",
        name: "BookBeat",
        description: "i18n.collectors.bookbeat.description",
        version: "0",
        website: "http://www.bookbeat.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49718.jpg",
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
        loginUrl: "http://www.bookbeat.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BookbeatCollector.CONFIG);
    }
}
