
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SweetspotCollector extends SketchCollector {

    static CONFIG = {
        id: "sweetspot",
        name: "Sweetspot",
        description: "i18n.collectors.sweetspot.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xTUwzaDhFd0JjRUxIeWtMLF9SejdhUkVzZ1FqQUMyWmk2YklZWDZIaEdMekY1bnMy0100fyrbHgWw",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385747.jpg",
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
        loginUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xTUwzaDhFd0JjRUxIeWtMLF9SejdhUkVzZ1FqQUMyWmk2YklZWDZIaEdMekY1bnMy0100fyrbHgWw",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SweetspotCollector.CONFIG);
    }
}
