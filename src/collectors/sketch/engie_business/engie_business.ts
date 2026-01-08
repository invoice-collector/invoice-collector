
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EngieBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_business",
        name: "engie Business",
        description: "i18n.collectors.engie_business.description",
        version: "0",
        website: "https://myaccount-business.engie.co.uk/s/login/?ec=302&startURL=%2Fs%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/692768.jpg",
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
        loginUrl: "https://myaccount-business.engie.co.uk/s/login/?ec=302&startURL=%2Fs%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EngieBusinessCollector.CONFIG);
    }
}
