
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RapidapiCollector extends SketchCollector {

    static CONFIG = {
        id: "rapidapi",
        name: "RapidAPI",
        description: "i18n.collectors.rapidapi.description",
        version: "0",
        website: "https://rapidapi.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/246200.jpg",
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
        loginUrl: "https://rapidapi.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RapidapiCollector.CONFIG);
    }
}
