
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DreiAtCollector extends SketchCollector {

    static CONFIG = {
        id: "drei_at",
        name: "drei.at",
        description: "i18n.collectors.drei_at.description",
        version: "0",
        website: "https://www.drei.at/selfcare/restricted/toEbill.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11786.jpg",
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
        loginUrl: "https://www.drei.at/selfcare/restricted/toEbill.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DreiAtCollector.CONFIG);
    }
}
