
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CallgearCollector extends SketchCollector {

    static CONFIG = {
        id: "callgear",
        name: "Callgear",
        description: "i18n.collectors.callgear.description",
        version: "0",
        website: "https://app.callgear.com/#controller.id=%22account.usabilling.controller.Page%22&siteId=null&dateRange.startDate=%222023-09-27T00%3A00%3A00%22&dateRange.endDate=%222023-10-03T23%3A59%3A59%22&dateRange.compareStartDate=null&dateRange.compareEndDate=null",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2182606.jpg",
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
        loginUrl: "https://app.callgear.com/#controller.id=%22account.usabilling.controller.Page%22&siteId=null&dateRange.startDate=%222023-09-27T00%3A00%3A00%22&dateRange.endDate=%222023-10-03T23%3A59%3A59%22&dateRange.compareStartDate=null&dateRange.compareEndDate=null",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CallgearCollector.CONFIG);
    }
}
