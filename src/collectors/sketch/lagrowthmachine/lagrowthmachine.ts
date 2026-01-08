
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LagrowthmachineCollector extends SketchCollector {

    static CONFIG = {
        id: "lagrowthmachine",
        name: "LaGrowthMachine",
        description: "i18n.collectors.lagrowthmachine.description",
        version: "0",
        website: "https://app.lagrowthmachine.com/campaigns",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1183966.jpg",
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
        loginUrl: "https://app.lagrowthmachine.com/campaigns",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LagrowthmachineCollector.CONFIG);
    }
}
