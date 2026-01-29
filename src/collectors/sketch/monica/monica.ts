
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MonicaCollector extends SketchCollector {

    static CONFIG = {
        id: "monica",
        name: "Monica",
        description: "i18n.collectors.monica.description",
        version: "0",
        website: "https://monica.im/login?redirectTo=https%3A%2F%2Fmonica.im%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2557363.jpg",
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
        loginUrl: "https://monica.im/login?redirectTo=https%3A%2F%2Fmonica.im%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MonicaCollector.CONFIG);
    }
}
