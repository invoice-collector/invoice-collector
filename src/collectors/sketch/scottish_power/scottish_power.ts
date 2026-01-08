
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ScottishPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "scottish_power",
        name: "Scottish Power",
        description: "i18n.collectors.scottish_power.description",
        version: "0",
        website: "https://www.scottishpower.co.uk/account/login.process?execution=e1s1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/216587.jpg",
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
        loginUrl: "https://www.scottishpower.co.uk/account/login.process?execution=e1s1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScottishPowerCollector.CONFIG);
    }
}
