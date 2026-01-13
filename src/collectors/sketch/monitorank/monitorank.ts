
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MonitorankCollector extends SketchCollector {

    static CONFIG = {
        id: "monitorank",
        name: "MONITORANK",
        description: "i18n.collectors.monitorank.description",
        version: "0",
        website: "https://account.monitorank.com/fr/#/connection/connection/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940361.jpg",
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
        loginUrl: "https://account.monitorank.com/fr/#/connection/connection/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonitorankCollector.CONFIG);
    }
}
