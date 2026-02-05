
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ClockifyCollector extends SketchCollector {

    static CONFIG = {
        id: "clockify",
        name: "Clockify",
        description: "i18n.collectors.clockify.description",
        version: "0",
        website: "https://clockify.me/workspaces/5c227ebdb079870b01b06417/settings#subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223729.jpg",
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
        loginUrl: "https://clockify.me/workspaces/5c227ebdb079870b01b06417/settings#subscription",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ClockifyCollector.CONFIG);
    }
}
