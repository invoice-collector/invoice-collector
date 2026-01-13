
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class A2aEnergiaCollector extends SketchCollector {

    static CONFIG = {
        id: "a2a_energia",
        name: "a2a energia",
        description: "i18n.collectors.a2a_energia.description",
        version: "0",
        website: "http://www.a2aenergia.eu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8909.jpg",
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
        loginUrl: "http://www.a2aenergia.eu",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(A2aEnergiaCollector.CONFIG);
    }
}
