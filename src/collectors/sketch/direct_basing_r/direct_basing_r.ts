
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DirectBasingRCollector extends SketchCollector {

    static CONFIG = {
        id: "direct_basing_r",
        name: "Direct Basing(r)",
        description: "i18n.collectors.direct_basing_r.description",
        version: "0",
        website: "http://www.directbasing.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32801.jpg",
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
        loginUrl: "http://www.directbasing.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DirectBasingRCollector.CONFIG);
    }
}
