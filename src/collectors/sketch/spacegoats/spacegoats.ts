
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpacegoatsCollector extends SketchCollector {

    static CONFIG = {
        id: "spacegoats",
        name: "Spacegoats",
        description: "i18n.collectors.spacegoats.description",
        version: "0",
        website: "http://www.spacegoats.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121429.jpg",
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
        loginUrl: "http://www.spacegoats.io",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpacegoatsCollector.CONFIG);
    }
}
