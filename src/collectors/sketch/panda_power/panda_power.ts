
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PandaPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "panda_power",
        name: "Panda Power",
        description: "i18n.collectors.panda_power.description",
        version: "0",
        website: "https://my.pandapower.ie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745253.jpg",
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
        loginUrl: "https://my.pandapower.ie/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PandaPowerCollector.CONFIG);
    }
}
