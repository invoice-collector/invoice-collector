
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BoxAtWorkCollector extends SketchCollector {

    static CONFIG = {
        id: "box_at_work",
        name: "Box at Work",
        description: "i18n.collectors.box_at_work.description",
        version: "0",
        website: "http://www.boxatwork.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11667.jpg",
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
        loginUrl: "http://www.boxatwork.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BoxAtWorkCollector.CONFIG);
    }
}
