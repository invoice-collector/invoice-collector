
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AcastCollector extends SketchCollector {

    static CONFIG = {
        id: "acast",
        name: "Acast",
        description: "i18n.collectors.acast.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xOEpUZG5CanlCYUNneVBYLF9TbEwyaHZwTVNzQUJ6bWw3WUwycjg1S01aSjJ5Y1I50100e93SJcbH",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4554186.jpg",
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
        loginUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xOEpUZG5CanlCYUNneVBYLF9TbEwyaHZwTVNzQUJ6bWw3WUwycjg1S01aSjJ5Y1I50100e93SJcbH",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AcastCollector.CONFIG);
    }
}
