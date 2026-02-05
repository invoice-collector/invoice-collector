
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GotomeetingCollector extends SketchCollector {

    static CONFIG = {
        id: "gotomeeting",
        name: "GoToMeeting",
        description: "i18n.collectors.gotomeeting.description",
        version: "0",
        website: "https://cmrc.logmeininc.com/billingHistory.tmpl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/544.jpg",
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
        loginUrl: "https://cmrc.logmeininc.com/billingHistory.tmpl",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GotomeetingCollector.CONFIG);
    }
}
