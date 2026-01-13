
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GalpCollector extends SketchCollector {

    static CONFIG = {
        id: "galp",
        name: "Galp",
        description: "i18n.collectors.galp.description",
        version: "0",
        website: "http://www.galpenergia.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9166.jpg",
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
        loginUrl: "http://www.galpenergia.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GalpCollector.CONFIG);
    }
}
