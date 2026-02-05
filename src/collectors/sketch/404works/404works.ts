
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _404worksCollector extends SketchCollector {

    static CONFIG = {
        id: "404works",
        name: "404Works",
        description: "i18n.collectors.404works.description",
        version: "0",
        website: "https://www.404works.com/fr/purchases/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172796.jpg",
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
        loginUrl: "https://www.404works.com/fr/purchases/index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(_404worksCollector.CONFIG);
    }
}
