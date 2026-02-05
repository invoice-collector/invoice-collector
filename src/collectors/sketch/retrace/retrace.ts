
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RetraceCollector extends SketchCollector {

    static CONFIG = {
        id: "retrace",
        name: "Retrace",
        description: "i18n.collectors.retrace.description",
        version: "0",
        website: "https://s1.stackify.com/Manage/ManageSubscription/ViewStatements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203079.jpg",
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
        loginUrl: "https://s1.stackify.com/Manage/ManageSubscription/ViewStatements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RetraceCollector.CONFIG);
    }
}
