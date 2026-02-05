
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SnapnamesCollector extends SketchCollector {

    static CONFIG = {
        id: "snapnames",
        name: "snapnames",
        description: "i18n.collectors.snapnames.description",
        version: "0",
        website: "https://www.snapnames.com/switch.sn?view=registrationHistory&vcFilter=true&viewName=sn.view.regHist&filter=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/190171.jpg",
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
        loginUrl: "https://www.snapnames.com/switch.sn?view=registrationHistory&vcFilter=true&viewName=sn.view.regHist&filter=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SnapnamesCollector.CONFIG);
    }
}
