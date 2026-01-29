
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SternstromCollector extends SketchCollector {

    static CONFIG = {
        id: "sternstrom",
        name: "SternStrom",
        description: "i18n.collectors.sternstrom.description",
        version: "0",
        website: "https://www.sternstrom.de/sternstrom/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9155.jpg",
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
        loginUrl: "https://www.sternstrom.de/sternstrom/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SternstromCollector.CONFIG);
    }
}
