
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TuritopCollector extends SketchCollector {

    static CONFIG = {
        id: "turitop",
        name: "Turitop",
        description: "i18n.collectors.turitop.description",
        version: "0",
        website: "https://app.turitop.com/admin/company/L194/edit",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132280.jpg",
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
        loginUrl: "https://app.turitop.com/admin/company/L194/edit",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TuritopCollector.CONFIG);
    }
}
