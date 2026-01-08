
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BalsamiqCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "balsamiq_cloud",
        name: "Balsamiq Cloud",
        description: "i18n.collectors.balsamiq_cloud.description",
        version: "0",
        website: "https://balsamiq.cloud",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61478.jpg",
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
        loginUrl: "https://balsamiq.cloud",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BalsamiqCloudCollector.CONFIG);
    }
}
