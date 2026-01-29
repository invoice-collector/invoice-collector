
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyBannerDeCollector extends SketchCollector {

    static CONFIG = {
        id: "my_banner_de",
        name: "my-banner.de",
        description: "i18n.collectors.my_banner_de.description",
        version: "0",
        website: "https://www.my-banner.de/customer/account/login/referer/aHR0cHM6Ly93d3cubXktYmFubmVyLmRlL2N1c3RvbWVyL2FjY291bnQvaW5kZXgv",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34759.jpg",
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
        loginUrl: "https://www.my-banner.de/customer/account/login/referer/aHR0cHM6Ly93d3cubXktYmFubmVyLmRlL2N1c3RvbWVyL2FjY291bnQvaW5kZXgv",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MyBannerDeCollector.CONFIG);
    }
}
