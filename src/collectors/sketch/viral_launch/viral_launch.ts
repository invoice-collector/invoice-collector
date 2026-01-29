
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ViralLaunchCollector extends SketchCollector {

    static CONFIG = {
        id: "viral_launch",
        name: "Viral Launch",
        description: "i18n.collectors.viral_launch.description",
        version: "0",
        website: "https://viral-launch.com/sellers/launch-staging/pages/account-management.html#/account-settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50560.jpg",
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
        loginUrl: "https://viral-launch.com/sellers/launch-staging/pages/account-management.html#/account-settings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ViralLaunchCollector.CONFIG);
    }
}
