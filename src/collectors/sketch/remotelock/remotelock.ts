
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RemotelockCollector extends SketchCollector {

    static CONFIG = {
        id: "remotelock",
        name: "RemoteLOCK",
        description: "i18n.collectors.remotelock.description",
        version: "0",
        website: "https://connect.devicewebmanager.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67214.jpg",
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
        loginUrl: "https://connect.devicewebmanager.com/sign-in",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RemotelockCollector.CONFIG);
    }
}
