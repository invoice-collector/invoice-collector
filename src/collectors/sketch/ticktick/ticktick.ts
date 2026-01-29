
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TicktickCollector extends SketchCollector {

    static CONFIG = {
        id: "ticktick",
        name: "TickTick",
        description: "i18n.collectors.ticktick.description",
        version: "0",
        website: "https://ticktick.com/webapp/#settings/premium",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1275840.jpg",
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
        loginUrl: "https://ticktick.com/webapp/#settings/premium",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TicktickCollector.CONFIG);
    }
}
