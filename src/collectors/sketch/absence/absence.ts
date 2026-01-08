
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AbsenceCollector extends SketchCollector {

    static CONFIG = {
        id: "absence",
        name: "absence",
        description: "i18n.collectors.absence.description",
        version: "0",
        website: "https://app.absence.io/#/actions/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/13355.jpg",
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
        loginUrl: "https://app.absence.io/#/actions/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AbsenceCollector.CONFIG);
    }
}
