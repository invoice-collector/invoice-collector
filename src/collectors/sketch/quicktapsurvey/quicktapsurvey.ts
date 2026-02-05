
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class QuicktapsurveyCollector extends SketchCollector {

    static CONFIG = {
        id: "quicktapsurvey",
        name: "QuickTapSurvey",
        description: "i18n.collectors.quicktapsurvey.description",
        version: "0",
        website: "https://www.quicktapsurvey.com/admin/account/list-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64901.jpg",
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
        loginUrl: "https://www.quicktapsurvey.com/admin/account/list-invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(QuicktapsurveyCollector.CONFIG);
    }
}
