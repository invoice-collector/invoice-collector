
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BakeaffairAtCollector extends SketchCollector {

    static CONFIG = {
        id: "bakeaffair_at",
        name: "bakeaffair.at",
        description: "i18n.collectors.bakeaffair_at.description",
        version: "0",
        website: "www.bakeaffair.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612024.jpg",
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
        loginUrl: "www.bakeaffair.at",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BakeaffairAtCollector.CONFIG);
    }
}
