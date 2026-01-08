
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CronjobDeCollector extends SketchCollector {

    static CONFIG = {
        id: "cronjob_de",
        name: "cronjob.de",
        description: "i18n.collectors.cronjob_de.description",
        version: "0",
        website: "https://www.cronjob.de/loggedin/tarifdaten",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102333.jpg",
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
        loginUrl: "https://www.cronjob.de/loggedin/tarifdaten",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CronjobDeCollector.CONFIG);
    }
}
