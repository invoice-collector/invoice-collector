
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CreativeliveCollector extends SketchCollector {

    static CONFIG = {
        id: "creativelive",
        name: "CreativeLive",
        description: "i18n.collectors.creativelive.description",
        version: "0",
        website: "http://www.creativelive.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9948.jpg",
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
        loginUrl: "http://www.creativelive.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CreativeliveCollector.CONFIG);
    }
}
