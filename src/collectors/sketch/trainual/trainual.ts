
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TrainualCollector extends SketchCollector {

    static CONFIG = {
        id: "trainual",
        name: "Trainual",
        description: "i18n.collectors.trainual.description",
        version: "0",
        website: "https://app.trainual.com/accounts/universal_login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090216.jpg",
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
        loginUrl: "https://app.trainual.com/accounts/universal_login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrainualCollector.CONFIG);
    }
}
